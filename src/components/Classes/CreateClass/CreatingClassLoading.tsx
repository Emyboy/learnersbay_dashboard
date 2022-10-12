import { Box, Flex, Spinner, useToast } from "@chakra-ui/react";
import { ClassSyllabus, MainAppStore } from "../../../interfaces/index";
import { ApiRequest } from "../../../utils/API.utils";
import Cookies from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";

// eslint-disable-next-line
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { ClassService } from "../../../services/API/class.service";
const { storage } = require("../../../utils/Firebase");

type Props = {
    done: (e?: any) => void;
    onError: () => void;
    data: any;
    syllabus: ClassSyllabus[];
    thumbnail_file: any;
    video_file: any;
};

export function CreatingClassLoading({
    done,
    onError,
    data,
    syllabus,
    thumbnail_file,
    video_file,
}: Props) {
    // TODO - handle all api errors

    const toast = useToast();
    const { user } = useSelector((state: MainAppStore) => state.auth);

    const updateClass = async (class_id: number, data: any) => {
        try {
            const update = await ClassService.updateClassData(class_id, data);
            if (done) {
                done(update.data.data);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const uploadVideo = useCallback(async (newClass: any) => {
        try {
            console.log("UPLOADING WITH FIREBASE --", video_file);
            const storageRef = ref(
                storage,
                `class_intro_video/${user?.id}/class_${newClass?.id}/${newClass?.id}-${user?.id}-${newClass?.bucket_id}`,
            );
            const uploadTask = uploadBytesResumable(storageRef, video_file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            updateClass(newClass?.id, {
                                intro_video: downloadURL,
                            });
                        },
                    );
                },
            );
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }, []);

    const createNewCourse = useCallback(async () => {
        if (data && thumbnail_file) {
            try {
                //todo - add slug and remove special char
                const newClass = {
                    ...data,
                    category: data?.category?.id,
                    intro_video: null,
                    class_schedule_type: data?.class_schedule_type?.id,
                    language: data?.language?.id,
                    sub_categories: data?.sub_categories?.map(
                        (val: any) => val.value.id,
                    ),
                };
                console.log("CREATING CLASS --", {
                    newClass,
                    thumbnail_file,
                });
                const res = await new ApiRequest(
                    `/courses`,
                    {
                        data: {
                            data: {
                                thumbnail_file,
                                // video_file,
                                newClass,
                                syllabus,
                            },
                        },
                        headers: {
                            authorization: `Bearer ${Cookies.get(
                                "auth_token",
                            )}`,
                        },
                        method: "POST",
                    },
                    true,
                ).go();
                console.log("CLASS CREATED ---", res.data);
                if (video_file) {
                    uploadVideo(res.data);
                } else {
                    if (done) {
                        done(res.data);
                    }
                }
            } catch (error) {
                if (onError) {
                    onError();
                }
                toast({
                    title: ApiRequest.getErrorMessageText(error),
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });

                return Promise.reject(error);
            }
        }
    }, [data, done, onError, syllabus, thumbnail_file, toast]);

    useEffect(() => {
        console.log("UPLOAD DATA MOUNTED --", {
            // data,
            // syllabus,
            // thumbnail_file,
            // video_file,
        });
        // if (video_file) {
        //     uploadVideo(video_file);
        // } else {
        // }
        createNewCourse();
    }, [video_file, createNewCourse, uploadVideo]);

    return (
        <Box
            py="10"
            style={
                {
                    // backgroundImage: `url(https://thumbs.gfycat.com/ConcreteWideDoctorfish-max-1mb.gif)`,
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",
                }
            }
        >
            <Flex
                justifyContent={"center"}
                alignItems="center"
                flexDirection={"column"}
            >
                <img
                    width="200"
                    // src="https://www.bycom.pt/media/1505/404.gif"
                    src="https://res.cloudinary.com/ddjgvfkpq/image/upload/v1664499568/assets/404_b0xkvw.gif"
                    alt="loading"
                />
                <Spinner />
                <br />
                <h3 className="fw-500">Publishing Your Class</h3>
            </Flex>
        </Box>
    );
}
