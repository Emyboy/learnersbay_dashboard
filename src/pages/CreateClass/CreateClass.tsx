import { PreviewTypes } from "../../components/Classes";
import Layout from "../../components/Layout/Layout";
import { PageContent } from "../../components/Layout/PageContent";
import {
    BasicInfo,
    ClassSyllabusEditor,
    ClassType,
    CreateClassFinish,
    CreatingClassLoading,
    StepContainer,
} from "../../components/Classes/CreateClass";
import ClassPrice from "../../components/Classes/CreateClass/ClassPrice";
import CreateClassPreview from "../../components/Classes/CreateClass/CreateClassPreview";
import ThumbnailUpload from "../../components/Classes/CreateClass/ThumbnailUpload";
import React, { useEffect, useState } from "react";

export default function Create() {
    const [steps, setSteps] = useState(0);
    const [loading, setLoading] = useState(false);
    const [allowNext, setAllowNext] = useState(false);
    const [placeholderData, setPlaceholderData] = useState<any>({
        thumbnail_sm:
            "https://freepikpsd.com/file/2019/10/empty-image-png-7-Transparent-Images.png",
    });
    const [thumbnail_file, setThumbnails] = useState<any>(null);
    const [class_syllabus, setClassSyllabus] = useState([]);
    const [video_file, setVideoFile] = useState<any>(null);

    useEffect(() => {
        if (loading) {
            setLoading(false);
        }
    }, [steps, loading]);

    const setData = (newData: any) => {
        setPlaceholderData({ ...placeholderData, ...newData });
    };

    // console.log("CLASS DATA --", {
    //     placeholderData,
    //     thumbnail_file,
    //     video_file,
    // });

    const goNext = () => {
        setSteps(steps + 1);
    };

    return (
        <Layout>
            <PageContent pageHeading="Create New Class">
                <div className="row y-gap-60">
                    <div className="col-xl-8 col-lg-12">
                        {
                            [
                                <StepContainer
                                    heading="Basic Information"
                                    allowNext={allowNext}
                                    onNext={goNext}
                                >
                                    <BasicInfo
                                        ready={(e) => {
                                            setPlaceholderData(e);
                                            setAllowNext(true);
                                        }}
                                    />
                                </StepContainer>,
                                <StepContainer
                                    heading="Select class type"
                                    allowNext={
                                        placeholderData?.class_schedule_type
                                    }
                                    onNext={goNext}
                                >
                                    <ClassType
                                        ready={(e) =>
                                            setData({ class_schedule_type: e })
                                        }
                                    />
                                </StepContainer>,
                                <StepContainer
                                    heading="Create class syllabus"
                                    allowNext={class_syllabus.length > 0}
                                    onNext={goNext}
                                >
                                    <ClassSyllabusEditor
                                        ready={setClassSyllabus}
                                    />
                                </StepContainer>,
                                <StepContainer
                                    heading="Upload class thumbnail"
                                    allowNext={thumbnail_file}
                                    onNext={goNext}
                                >
                                    <ThumbnailUpload
                                        thumbnail_url={
                                            placeholderData.thumbnail_sm
                                        }
                                        accept={
                                            "image/png, image/gif, image/jpeg"
                                        }
                                        // accept={["png", "jpg", "jpeg"]}
                                        ready={setThumbnails}
                                        previewType={PreviewTypes.image}
                                    />
                                </StepContainer>,
                                <StepContainer
                                    heading="Upload intro video"
                                    allowNext={video_file}
                                    onNext={goNext}
                                >
                                    <ThumbnailUpload
                                        thumbnail_url="https://gskpro.com/etc/designs/zg-placeholders/video.png"
                                        file={null}
                                        ready={(e) => setVideoFile(e)}
                                        accept="video/mp4"
                                        previewType={PreviewTypes.video}
                                    />
                                </StepContainer>,
                                <StepContainer
                                    heading="Class Payment"
                                    allowNext={placeholderData?.max_price}
                                    onNext={goNext}
                                >
                                    <ClassPrice
                                        ready={(e) =>
                                            setData({ max_price: String(e) })
                                        }
                                    />
                                </StepContainer>,
                                <StepContainer noControls>
                                    <CreatingClassLoading
                                        data={placeholderData}
                                        syllabus={class_syllabus}
                                        thumbnail_file={thumbnail_file}
                                        video_file={video_file}
                                        done={goNext}
                                        onError={() => {}}
                                    />
                                </StepContainer>,
                                <StepContainer noControls>
                                    <CreateClassFinish />
                                </StepContainer>,
                            ][steps]
                        }
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <CreateClassPreview />
                    </div>
                </div>
            </PageContent>
        </Layout>
    );
}
