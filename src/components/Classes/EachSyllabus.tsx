import React,{ useState} from 'react'
import { is_mobile, THEME, THEME_LIGHT } from '../../CONSTANTS';
import { ClassSyllabus } from '../../interfaces';
import {
    Box,
    Button,
    Center,
    HStack,
    Input,
    Text,
    Tooltip,
    VStack,
    Modal,
    ModalContent,
    ModalBody,
    ModalOverlay,
} from "@chakra-ui/react";
import SyllabusForm from './CreateClass/SyllabusForm';
import ReactQuill from 'react-quill';
import { HTMLComponent } from "react-typescript-raw-html";


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
    const [showAdd, setShowAdd] = useState(false);
    const [class_syllabus, setClassSyllabus] = useState<ClassSyllabus[]>([]);

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
            <Modal
                isOpen={edit ? true : false}
                onClose={() => {}}
                size={["full", "full", "4xl"]}
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent minHeight={"80vh"}>
                    <ModalBody>
                        <Center my="10">
                            <Text fontWeight={"bold"} fontSize="2xl">
                                Edit Syllabus
                            </Text>
                        </Center>
                        <SyllabusForm
                            syllabusData={_data}
                            done={(e) => {
                                setClassSyllabus([...class_syllabus, e]);
                                setShowAdd(false);
                            }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <div className="accordion__button py-20 px-30 bg-light-4">
                <div className="d-flex items-center">
                    <div className="icon icon-drag mr-10"></div>
                    <span className="text-16 lh-1 fw-500 text-dark-1">
                        {is_mobile
                            ? _data.attributes.title.slice(0, 12) + "..."
                            : _data.attributes.title.slice(0, 70) + "..." ||
                              "Untitled section"}
                    </span>
                </div>

                <div className="d-flex x-gap-10 items-center">
                    <Tooltip
                        hasArrow
                        label="Edit Title"
                        bg={THEME}
                        color="white"
                        placement="top"
                    >
                        <Box
                            cursor={"pointer"}
                            className="icon icon-edit mr-5"
                            onClick={() => setEdit(true)}
                        ></Box>
                    </Tooltip>
                    <Tooltip
                        hasArrow
                        label="Remove section"
                        bg={THEME}
                        color="white"
                        placement="top"
                    >
                        <Box
                            cursor={"pointer"}
                            className="icon icon-bin"
                            onClick={() => setAskDelete(true)}
                        ></Box>
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
                    <VStack style={{ width: "100%" }}>
                        <label>Section description</label>
                        <HTMLComponent
                            rawHTML={`${
                                _data.attributes.description ||
                                "<small>No Section Description</small>"
                            }`}
                        />
                        {/* <ReactQuill
                            // modules={modules}
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
                        /> */}
                    </VStack>
                </div>
            </div>
        </div>
    );
};

export default EachSyllabus;
