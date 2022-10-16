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
    Modal,
    ModalContent,
    ModalBody,
    ModalOverlay,
} from "@chakra-ui/react";
import { ClassSyllabus } from "../../../interfaces";
import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { is_mobile, THEME, THEME_LIGHT } from "../../../CONSTANTS";
import { HTMLComponent } from "react-typescript-raw-html";
import { FormsProps } from "./CreateClass.interface";
import "react-quill/dist/quill.snow.css";
import SyllabusForm from "./SyllabusForm";
import EachSyllabus from "../EachSyllabus";

const modules = {
    toolbar: false,
};

export function ClassSyllabusEditor({ ready }: FormsProps) {
    const [class_syllabus, setClassSyllabus] = useState<ClassSyllabus[]>([]);
    const [showAdd, setShowAdd] = useState(false);

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
        class_syllabus.forEach((val) => {
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
    }, [class_syllabus, ready]);

    return (
        <div>
            <Modal
                isOpen={showAdd}
                onClose={() => {}}
                size={["full", "full", "4xl"]}
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent minHeight={"80vh"}>
                    <ModalBody>
                        <Center my="10">
                            <Text fontWeight={"bold"} fontSize="2xl">
                                Add Syllabus
                            </Text>
                        </Center>
                        <SyllabusForm
                            done={(e) => {
                                setClassSyllabus([...class_syllabus, e]);
                                setShowAdd(false);
                            }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
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
                <Button
                    variant={"ghost"}
                    pb={["40"]}
                    pt="10"
                    onClick={() => setShowAdd(true)}
                >
                    <MdAdd size={25} color={THEME} />
                    <Text className="mt-0 ml-5 text-purple-1">
                        Add Syllabus
                    </Text>
                </Button>
            </Center>
        </div>
    );
}


