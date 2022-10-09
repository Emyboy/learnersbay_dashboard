import ReactQuill from "react-quill";
import {
    Box,
    Button,
    Center,
    HStack,
    Input,
    Text,
    Tooltip,
    VStack,
} from "@chakra-ui/react";
import { ClassSyllabus } from "../../../interfaces/index";
import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { THEME, THEME_LIGHT } from "../../../CONSTANTS";
// import renderHTML from "react-render-html";
import { FormsProps } from "./CreateClass.interface";

export function ClassSyllabusEditor({ ready }: FormsProps) {
    const [class_syllabus, setClassSyllabus] = useState<ClassSyllabus[]>([]);

    const addEmptySyllabus = () => {
        const newSyllabus: ClassSyllabus = {
            isNew: true,
            attributes: {
                title: "",
                index: class_syllabus.length,
                description: "",
            },
        };
        setClassSyllabus([...class_syllabus, newSyllabus]);
    };

    const removeSyllabus = (syllabus: ClassSyllabus) => {
        const _data: ClassSyllabus[] = [];
        class_syllabus.map((val) => {
            if (val.attributes.index !== syllabus.attributes.index) {
                _data.push(val);
            }
        });
        setClassSyllabus([]);
        setTimeout(() => {
            setClassSyllabus(
                _data.map((val) => {
                    return {
                        ...val,
                        isNew: false,
                    };
                }),
            );
        }, 0);
    };

    useEffect(() => {
        if (class_syllabus.length > 0) {
            if (ready) {
                ready(class_syllabus);
            }
        }
    }, [class_syllabus]);

    return (
        <div>
            <Box mb="10" className="accordion -block-2 text-left js-accordion">
                {class_syllabus.map((val, i) => {
                    return (
                        <EachSyllabus
                            key={`silli-${i}`}
                            onRemove={(e) => {
                                removeSyllabus(e);
                            }}
                            data={val}
                            onSave={(e) => {
                                const _data = class_syllabus;
                                _data[class_syllabus.indexOf(val)] = e;
                                setClassSyllabus(_data);
                            }}
                        />
                    );
                })}
            </Box>

            <Center>
                <Button bg={THEME_LIGHT} py="10" onClick={addEmptySyllabus}>
                    <VStack>
                        <MdAdd />
                        <Text className="mt-0">Add Syllabus</Text>
                    </VStack>
                </Button>
            </Center>
        </div>
    );
}

type EachSyllabusProps = {
    data: ClassSyllabus;
    onRemove: (e: ClassSyllabus) => void;
    onSave?: (e: ClassSyllabus) => void;
};

const EachSyllabus = ({ data, onRemove, onSave }: EachSyllabusProps) => {
    const [reveal, setReveal] = useState(data?.isNew);
    const [_data, setData] = useState(data);
    const [edit, setEdit] = useState(data.isNew);
    const [askDelete, setAskDelete] = useState(false);
    const [description, setDescription] = useState(
        data?.attributes?.description || "",
    );
    const [title, setTitle] = useState(data?.attributes?.title || "");

    const modules = {
        toolbar: false,
    };

    const _onSave = () => {
        if (onSave) {
            const newData = {
                ..._data,
                attributes: {
                    ...data.attributes,
                    description,
                    title,
                },
            };
            onSave(newData);
            setData(newData);
            setEdit(false);
        }
    };

    if (askDelete) {
        return (
            <Box
                shadow="base"
                mb="5"
                p="10"
                borderRadius={"lg"}
                bg={THEME_LIGHT}
                mt="5"
            >
                <Center>
                    <VStack>
                        <Text fontWeight={"semibold"} fontSize="2xl">
                            Are you sure you want to delete?
                        </Text>
                        <HStack pt="5">
                            <Button
                                w="20"
                                colorScheme={"red"}
                                onClick={() => {
                                    setAskDelete(false);
                                    onRemove(data);
                                }}
                            >
                                Yes
                            </Button>
                            <Button
                                w="20"
                                variant={"link"}
                                color="red"
                                onClick={() => setAskDelete(false)}
                            >
                                No
                            </Button>
                        </HStack>
                    </VStack>
                </Center>
            </Box>
        );
    }

    return (
        <div
            className={`accordion__item -dark-bg-dark-1 mt-10 ${
                reveal && "is-active"
            }`}
        >
            <div className="accordion__button py-20 px-30 bg-light-4">
                <div className="d-flex items-center">
                    <div className="icon icon-drag mr-10"></div>
                    <span className="text-16 lh-1 fw-500 text-dark-1">
                        {!edit ? (
                            _data.attributes.title || "Untitled section"
                        ) : (
                            <Input
                                placeholder="Enter a short section title"
                                w="96"
                                defaultValue={_data.attributes.title}
                                size={"sm"}
                                autoFocus
                                maxLength={95}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        )}
                    </span>
                </div>

                <div className="d-flex x-gap-10 items-center">
                    {edit ? (
                        <Button
                            onClick={_onSave}
                            pr="5"
                            variant={"link"}
                            size="sm"
                            color={THEME}
                        >
                            Save
                        </Button>
                    ) : (
                        <Tooltip
                            hasArrow
                            label="Edit Title"
                            bg={THEME}
                            color="white"
                            placement="top"
                        >
                            <a
                                href="#edit"
                                className="icon icon-edit mr-5"
                                onClick={() => setEdit(true)}
                            ></a>
                        </Tooltip>
                    )}
                    <Tooltip
                        hasArrow
                        label="Remove section"
                        bg={THEME}
                        color="white"
                        placement="top"
                    >
                        <a
                            href="#"
                            className="icon icon-bin"
                            onClick={() => setAskDelete(true)}
                        ></a>
                    </Tooltip>
                    <div
                        className="accordion__icon mr-0"
                        onClick={() => setReveal(!reveal)}
                    >
                        <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                        <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                    </div>
                </div>
            </div>

            <div
                className="accordion__content"
                style={{
                    maxHeight: reveal ? "900px" : "0px",
                    minHeight: reveal ? "280px" : "0px",
                }}
            >
                <div className="accordion__content__inner px-30 py-30">
                    {edit ? (
                        <VStack style={{ width: "100%" }}>
                            <label>Section description</label>
                            <ReactQuill
                                modules={modules}
                                theme="snow"
                                placeholder="Give a detailed explanation of this section"
                                value={description}
                                onChange={(e: React.SetStateAction<string>) => {
                                    setDescription(e);
                                }}
                                style={{
                                    width: "100%",
                                    height: edit ? "230px" : "100px",
                                }}
                            />
                        </VStack>
                    ) : (
                        <div>
                            {/* {renderHTML(
                                `${
                                    _data.attributes.description ||
                                    "<small>No Section Description</small>"
                                }`,
                            )} */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
