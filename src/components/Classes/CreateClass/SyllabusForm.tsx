import { Box, Flex, Input, Switch, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { HTMLComponent } from "react-typescript-raw-html";
import { is_mobile, THEME_LIGHT } from "../../../CONSTANTS";
import { ClassSyllabus } from "../../../interfaces";

var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["image"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
];
const modules = {
    toolbar: toolbarOptions,
};

type Props = {
    syllabusData?: ClassSyllabus;
    done?: (e: any) => void;
    edit?: boolean;
};

export default function SyllabusForm({ done, syllabusData, edit }: Props) {
    const [schedule, setSchedule] = useState<string>("");
    const [previewDescription, setPreview] = useState(false);
    const [_syllabusData, setSyllabusData] = useState<ClassSyllabus>({
        id: syllabusData?.id,
        attributes: {
            title: syllabusData?.attributes.title || "",
            class: syllabusData?.attributes.class,
            description: syllabusData?.attributes.description || "",
        },
    });

    const handleSubmit = async () => {
        if (!syllabusData && done) {
            done({
                isNew: false,
                attributes: {
                    title: _syllabusData.attributes.title,
                    index: 0,
                    description: _syllabusData.attributes.description,
                },
            });
        }
        if (syllabusData && done) {
            console.log('SAVING EDITS')
            done(_syllabusData);
        } else if (syllabusData && edit && done) {
            // todo - make API call to save data
        }
    };
    // console.log("DATA ---", _syllabusData);

    const handleChange = (data: any) => {
        setSyllabusData({
            ..._syllabusData,
            attributes: {
                ..._syllabusData?.attributes,
                ...data,
            },
        });
    };

    return (
        <form className="contact-form respondForm__form">
            <Box mb="5">
                <label className="mb-3">
                    Section Title ({_syllabusData.attributes.title.length}/100)
                </label>
                <Input
                    placeholder="An introduction to XYZ"
                    autoFocus
                    onChange={(e) =>
                        // setSyllabusData({
                        //     ..._syllabusData,
                        //     attributes: {
                        //         ..._syllabusData?.attributes,
                        //         title: e.target.value,
                        //     },
                        // })
                        handleChange({ title: e.target.value })
                    }
                    maxLength={100}
                    value={_syllabusData.attributes.title}
                />
            </Box>
            <Box mb="5">
                <Flex alignItems={"center"}>
                    <Box mr="3">
                        <label className="mb-3">Date</label>
                        {/* <DatePickerCmp
                            // plugins={[<DatePanel />]}
                            onChange={setDates}
                            value={dates}
                            format="MMMM DD YYYY"
                        /> */}
                        <Input
                            type="datetime-local"
                            onChange={(e) =>
                                setSchedule(new Date(e.target.value).toJSON())
                            }
                        />
                    </Box>
                </Flex>
            </Box>
            <Box mb="10">
                <Flex justifyContent={"space-between"}>
                    <label className="mb-3">Short description</label>{" "}
                    <span className="ml-5">
                        <small>Preview</small>
                        <Switch
                            size="md"
                            ml="2"
                            isChecked={previewDescription}
                            onChange={(e) => setPreview(e.target.checked)}
                        />
                    </span>
                </Flex>
                {!previewDescription ? (
                    <ReactQuill
                        modules={modules}
                        theme="snow"
                        placeholder="Give a detailed explanation of this section"
                        value={_syllabusData.attributes.description}
                        onChange={(e: React.SetStateAction<string>) => {
                            handleChange({ description: e });
                        }}
                        style={{
                            width: "100%",
                            height: is_mobile ? "200px" : "400px",
                        }}
                    />
                ) : (
                    <Box
                        shadow="md"
                        bg={THEME_LIGHT}
                        my="5"
                        p="2"
                        borderRadius={"lg"}
                        borderColor={THEME_LIGHT}
                    >
                        <HTMLComponent
                            rawHTML={`${
                                _syllabusData.attributes.description ||
                                "<small>No Section Description</small>"
                            }`}
                        />
                    </Box>
                )}
            </Box>
            <br />
            <Box mb={"5"} mt={["10", "5", "0"]}>
                <div className="d-inline-block">
                    <button
                        type="button"
                        disabled={
                            !_syllabusData.attributes.title &&
                            !_syllabusData.attributes.description &&
                            !schedule
                        }
                        onClick={handleSubmit}
                        className="button -md -dark-1 text-white"
                    >
                        {syllabusData ? "Save" : "Submit"}
                    </button>
                </div>
            </Box>
        </form>
    );
}
