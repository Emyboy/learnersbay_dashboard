import {
    Button,
    Center,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Spacer,
    Text,
    VStack,
} from "@chakra-ui/react";
import { MainAppStore } from "../../interfaces/index";
import React from "react";
import { useSelector } from "react-redux";
import { SiMaildotru } from "react-icons/si";
import { DANGER, GRAY_TEXT } from "../../CONSTANTS";
import { setViewState } from "../../redux/actions/view.action";

type Props = {};

export function VerifyEmailPopup({}: Props) {
    const { verify_email_popup } = useSelector(
        (state: MainAppStore) => state.view,
    );
    return (
        <Modal isOpen={verify_email_popup} onClose={() => {}}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Center py="10">
                        <VStack>
                            <SiMaildotru size={50} color={GRAY_TEXT} />
                            <Text fontWeight={"bold"} fontSize="2xl">
                                Verify Your Email
                            </Text>
                            <Text fontWeight={"light"} fontSize="md">
                                Please check your inbox or spam
                            </Text>
                            <Spacer pb="3" />
                            <Text fontWeight={"bold"} fontSize="md">
                                Or
                            </Text>
                            <Spacer pt="3" />
                            <Button
                                mt="20"
                                className="button -dark-1 text-white -dark-button-dark-1"
                                size={"md"}
                                w="100%"
                            >
                                Resend Email
                            </Button>
                            <Spacer />
                            <Button
                                variant={"ghost"}
                                onClick={() =>
                                    setViewState({
                                        verify_email_popup: false,
                                    })
                                }
                            >
                                <Text as="small" fontSize={"md"} color={DANGER}>
                                    Close
                                </Text>
                            </Button>
                        </VStack>
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
