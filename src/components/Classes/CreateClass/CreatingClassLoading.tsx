import { Box, Flex, Spinner, useToast } from "@chakra-ui/react";
import { ClassSyllabus } from "../../../interfaces/index";
import { ClassService } from "../../../services/API/class.service";
import { ApiRequest } from "../../../utils/API.utils";
import Cookies from "js-cookie";
import React, { useCallback, useEffect } from "react";

type Props = {
    done: (e?: any) => void;
    onError: () => void;
    data: any;
    syllabus: ClassSyllabus[],
    thumbnail_file:any;
    video_file:any;
};

export function CreatingClassLoading({
    done,
    onError,
    data,
    syllabus,
    thumbnail_file,
    video_file,
}: Props) {
    const toast = useToast();

    const createNewCourse = useCallback(async () => {
        try {
            //todo - add slug and remove special char
            const newClass = {
                ...data,
                category: data?.category?.id,
                class_schedule_type: data?.class_schedule_type?.id,
                language: data?.language?.id,
                sub_categories: data?.sub_categories?.map(
                    (val: any) => val.value.id,
                ),
            };
            console.log("CREATING CLASS --", { newClass, thumbnail_file });
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
                        authorization: `Bearer ${Cookies.get("auth_token")}`,
                    },
                    method: "POST",
                },
                true,
            ).go();
            console.log(res.data);
            if (done) {
                done(res.data);
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
    }, []);

    useEffect(() => {
        createNewCourse();
    }, [createNewCourse]);

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
                />
                <Spinner />
                <br />
                <h3 className="fw-500">Publishing Your Class</h3>
            </Flex>
        </Box>
    );
}
