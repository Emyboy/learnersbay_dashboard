import {
    Box,
    Button,
    Center,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { THEME, THEME_DARK, THEME_LIGHT } from "../../CONSTANTS";
import { ClassCategory, MainAppStore } from "../../interfaces";
import { updateUserInfo } from "../../redux/actions/auth.actions";
import {
    RiCheckboxBlankCircleLine,
    RiCheckboxBlankCircleFill,
} from "react-icons/ri";

export default function AuthCategorySelect() {
    const { user, user_info } = useSelector(
        (state: MainAppStore) => state.auth,
    );
    const { class_categories, class_sub_categories } = useSelector(
        (state: MainAppStore) => state.options,
    );
    const [step, setStep] = useState(0);
    const [selectedSubCat, setSelectedSubCat] = useState<ClassCategory[]>([]);
    const [selectedCat, setSelectedCat] = useState<ClassCategory[]>([]);
    const [allowNext, setAllowNext] = useState(true);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
        setLoading(true)
        updateUserInfo({
            interested_categories: selectedCat.map((val) => val.id),
            interested_sub_categories: selectedSubCat.map((val) => val.id),
        });
    };

    useEffect(() => {
        if (step === 0 && selectedCat.length > 0) {
            setAllowNext(true);
        } else if (step === 0 && selectedCat.length === 0) {
            setAllowNext(false);
        }
        if (step === 1 && selectedSubCat.length > 0) {
            setAllowNext(true);
        } else if (step === 1 && selectedSubCat.length === 0) {
            setAllowNext(false);
        }
    }, [step, selectedCat, selectedSubCat]);

    useEffect(() => {
        if (user_info && user && user_info.interested_categories.length === 0) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [user_info, user]);

    return (
        <Modal isOpen={show} onClose={() => {}} size={["full", "6xl"]}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Center my="10">
                        <Text
                            textAlign={"center"}
                            as="h1"
                            fontWeight={"bold"}
                            fontSize="3xl"
                        >
                            {step === 0 ? (
                                <>
                                    {user?.account_type === "instructor"
                                        ? "What do you want to teach?"
                                        : "What do you want to learn?"}
                                </>
                            ) : (
                                <>{"What areas?"}</>
                            )}
                        </Text>
                    </Center>
                    <Box
                        height={["67vh", "50vh"]}
                        className="scroll-bar-1"
                        maxHeight={["68vh"]}
                        overflowY="scroll"
                    >
                        <Flex flexWrap={"wrap"} alignItems={"center"}>
                            {step === 0 ? (
                                <>
                                    {class_categories.map((val) => {
                                        return (
                                            <EachCategory
                                                onSelect={(e) => {
                                                    if (
                                                        selectedCat.includes(
                                                            val,
                                                        )
                                                    ) {
                                                        setSelectedCat(
                                                            selectedCat.filter(
                                                                (x) =>
                                                                    x.id !==
                                                                    val.id,
                                                            ),
                                                        );
                                                    } else {
                                                        setSelectedCat([
                                                            ...selectedCat,
                                                            val,
                                                        ]);
                                                    }
                                                }}
                                                isSelected={selectedCat.includes(
                                                    val,
                                                )}
                                                key={val.id}
                                                val={val}
                                            />
                                        );
                                    })}
                                </>
                            ) : (
                                <>
                                    {class_sub_categories.map((val) => {
                                        return (
                                            <EachCategory
                                                onSelect={(e) => {
                                                    if (
                                                        selectedSubCat.includes(
                                                            val,
                                                        )
                                                    ) {
                                                        setSelectedSubCat(
                                                            selectedSubCat.filter(
                                                                (x) =>
                                                                    x.id !==
                                                                    val.id,
                                                            ),
                                                        );
                                                    } else {
                                                        setSelectedSubCat([
                                                            ...selectedSubCat,
                                                            val,
                                                        ]);
                                                    }
                                                }}
                                                isSelected={selectedSubCat.includes(
                                                    val,
                                                )}
                                                key={val.id}
                                                val={val}
                                            />
                                        );
                                    })}
                                </>
                            )}
                        </Flex>
                    </Box>
                </ModalBody>

                <Center my="10">
                    <Button
                        width={["60", "40"]}
                        size={["lg", "md"]}
                        // variant={"ghost"}
                        bg={THEME_DARK}
                        color="white"
                        _hover={{
                            bg: THEME,
                        }}
                        disabled={!allowNext || loading}
                        onClick={step === 0 ? () => setStep(1) : handleSubmit}
                    >
                        <>{step === 0 ? "Next" : "Done"}</>
                    </Button>
                </Center>
            </ModalContent>
        </Modal>
    );
}

interface Props {
    val: ClassCategory;
    isSelected: boolean;
    onSelect: (e: ClassCategory) => void;
}

const EachCategory = ({ val, onSelect, isSelected }: Props) => {
    return (
        <Box
            m="2"
            p="3"
            borderRadius={"lg"}
            bg={isSelected ? THEME : THEME_LIGHT}
            onClick={() => onSelect(val)}
            cursor="pointer"
        >
            <Flex alignItems={"center"}>
                {isSelected ? (
                    <RiCheckboxBlankCircleFill color="white" />
                ) : (
                    <RiCheckboxBlankCircleLine color={THEME} />
                )}{" "}
                <Text
                    ml="2"
                    fontWeight={"medium"}
                    color={isSelected ? "white" : THEME}
                >
                    {val.attributes.name}
                </Text>
            </Flex>
        </Box>
    );
};
