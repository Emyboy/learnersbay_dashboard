import React, {  useState, useEffect, useRef } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import {
    LG_THUMBNAIL_HEIGHT,
    LG_THUMBNAIL_WIDTH,
    THEME,
    THEME_LIGHT,
} from "../../CONSTANTS";
import { BsFillCloudUploadFill } from "react-icons/bs";
import Resizer from "react-image-file-resizer";

export enum PreviewTypes {
    video = "video",
    image = "image",
    file = "file",
}

interface Props {
    imgURL: string;
    ready?: (e: any) => void;
    done: (e: any) => void;
    accept: string;
    file_data: any;
    previewType: PreviewTypes;
}

export const ClassMediaUploader = ({
    imgURL,
    done,
    accept,
    file_data,
    previewType,
}: Props) => {
    const [error, setError] = useState<any>(null);
    const [imgFile, setImgFile] = useState<any>(file_data || null);

    const [strapiFile, setStrapiFile] = useState<any>(null);

    const fileSelector = useRef<any>(null);

    const resizeFile = (
        file: any,
        width: number,
        height: number,
        quality: number,
    ) => {
        return new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                width,
                height,
                "JPEG",
                quality,
                0,
                (uri: unknown) => {
                    resolve(uri);
                },
                "blob",
                width,
                height,
            );
        });
    };
    useEffect(() => {
        (async () => {
            if (imgFile) {
                if (previewType === PreviewTypes.image) {
                    const lg_blob = await resizeFile(
                        imgFile,
                        LG_THUMBNAIL_WIDTH,
                        LG_THUMBNAIL_HEIGHT,
                        50,
                    );
                    // setImgBlob(lg_blob);
                    processBlob(lg_blob);
                } else if (previewType === PreviewTypes.video) {
                    processBlob(imgFile);
                }
            } else {
                setStrapiFile(null);
                setImgFile(null);
            }
        })();
    }, [imgFile, previewType]);

    const processBlob = (blob: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            setStrapiFile(reader.result);
        };
    };

    const handleFileSelect = (file: any) => {
        if (file?.length === 0) {
            return;
        }
        if (
            file &&
            accept &&
            accept.includes(String(file[0]?.type).split("/")[1])
        ) {
            setStrapiFile(null);
            setImgFile(null);
            setImgFile(file[0]);
            console.log("SELECTED FILE --", file[0]);
        } else if (accept) {
            setError(
                `Invalid file. Expecting ${String(
                    accept
                        .replaceAll(",", " or ")
                        .replaceAll("/", " ")
                        .replaceAll("image", " "),
                )} files`,
            );
        }
    };

    useEffect(() => {
        if (previewType === "video" && done) {
            done(imgFile);
        } else {
            if (strapiFile && done) {
                // uploadClassThumbnail();
                done(strapiFile);
            } else {
                if (done) {
                    done(null);
                }
            }
        }
    }, [strapiFile, imgFile, done, previewType]);


    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 8000);
        }
    }, [error]);

    useEffect(() => {
        if (!file_data) {
            setStrapiFile(null);
            setImgFile(null);
        }
    }, [file_data]);

    const handleRemove = () => {
        if(done){
            done(null)
        }
        setImgFile(null);
        setStrapiFile(null);
    }

    return (
        <>
            <form className="contact-form d-flex lg:flex-column">
                <ImgPreview
                    imgFile={imgFile}
                    imgURL={imgURL}
                    strapiFile={strapiFile}
                    onRemove={handleRemove}
                    previewType={previewType}
                />

                <div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">
                    <div className="form-upload col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Course thumbnail*
                        </label>
                        <label
                            style={{ width: "100%" }}
                            htmlFor="selector"
                            onClick={() => {
                                if (
                                    fileSelector.current &&
                                    fileSelector.current.click
                                ) {
                                    fileSelector.current?.click();
                                }
                            }}
                        >
                            <a
                                href="#select"
                                className="linkform-upload__wrap row"
                            >
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        handleFileSelect(e.target.files)
                                    }
                                    id="selector"
                                    style={{ display: "none" }}
                                    ref={fileSelector}
                                    accept={accept}
                                />
                                <Box
                                    borderWidth={"medium"}
                                    borderColor={THEME_LIGHT}
                                    className="button  text-dark"
                                    style={{ height: "140px" }}
                                >
                                    <Center>
                                        <div>
                                            <Center>
                                                <BsFillCloudUploadFill
                                                    color={THEME}
                                                    size={30}
                                                />
                                            </Center>
                                            <Text
                                                color={THEME}
                                                fontWeight="medium"
                                            >
                                                Drag and drop image here
                                            </Text>
                                            <Text
                                                color={"gray.400"}
                                                fontWeight="light"
                                                fontSize={"sm"}
                                            >
                                                500 KB Max
                                            </Text>
                                        </div>
                                    </Center>
                                </Box>
                            </a>
                        </label>
                    </div>
                    <Text
                        color={"red.300"}
                        fontWeight="medium"
                        className="mt-10"
                    >
                        {error}
                    </Text>
                </div>
            </form>
        </>
    );
};

interface ImgPreviewProp {
    imgFile: any;
    strapiFile: any;
    imgURL: any;
    onRemove: () => void;
    previewType: string;
}

const ImgPreview = ({
    imgFile,
    strapiFile,
    previewType,
    imgURL,
    onRemove,
}: ImgPreviewProp) => {
    const [video, setVideo] = useState(imgFile);

    useEffect(() => {
        if (imgFile) {
            setVideo(null);
            setTimeout(() => {
                setVideo(imgFile);
            }, 0);
        } else {
            setVideo(false);
        }
    }, [imgFile]);

    return (
        <div className="relative shrink-0">
            {/* <img
                        className="w-1/1 rounded-5"
                        src={imgBlob ? imgBlob : imgURL}
                        alt="image"
                    /> */}
            {previewType === PreviewTypes.image && (
                <div
                    className="card border"
                    style={{
                        backgroundImage: `url(${
                            imgFile ? URL.createObjectURL(imgFile) : imgURL
                        })`,
                        borderRadius: "10px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "320px",
                        height: "250px",
                    }}
                />
            )}
            {previewType === PreviewTypes.video && video ? (
                <video
                    // width="380"
                    // height="540"
                    controls={false}
                    className="card rounded-5 bg-dark-1"
                    style={{ maxHeight: "250px", minWidth: "320px", borderRadius: '10px' }}
                >
                    <source
                        src={video ? URL.createObjectURL(video) : ""}
                        type="video/mp4"
                    />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <>
                    {previewType === PreviewTypes.video && (
                        <div
                            className="card border"
                            style={{
                                backgroundImage: `url(${imgURL})`,
                                borderRadius: "10px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "320px",
                                height: "250px",
                            }}
                        />
                    )}
                </>
            )}

            <div className="absolute-full-center d-flex justify-end py-20 px-20">
                {imgFile && (
                    <a
                        href="#c"
                        className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-4"
                        onClick={onRemove}
                    >
                        <i className="icon-bin text-16"></i>
                    </a>
                )}
            </div>
        </div>
    );
};
