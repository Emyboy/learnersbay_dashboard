import { MainAppStore } from "../../interfaces/index";
import { setViewState } from "../../redux/actions/view.action";
import React from "react";
import { useSelector } from "react-redux";
import { Box, Flex, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { THEME, THEME_LIGHT } from "../../CONSTANTS";
import { RiSearch2Line } from "react-icons/ri";


export default function SearchPopup() {
    const { show_search } = useSelector((state: MainAppStore) => state.view);

    if (!show_search) {
        return null;
    }

    return (
        <Modal isOpen={true} onClose={() => setViewState({ show_search: false})} size={""}>
            <ModalOverlay />
            <ModalContent className="scroll-bar-1">
                <Box className="toggle-element js-search-toggle -is-el-visible" py="20">
                    <div className="header-search bg-white">
                        <div className="container">
                            {/* <div className="header-search__field">
                                <div className="icon icon-search text-dark-1"></div>
                                <input
                                    type="text"
                                    className="col-12 text-18 lh-12 text-dark-1 fw-500"
                                    placeholder="What do you want to learn?"
                                />

                                <button
                                    className="d-flex items-center justify-center size-40 rounded-full bg-purple-3"
                                    data-el-toggle=".js-search-toggle"
                                >
                                    <img src="img/menus/close.svg" alt="icon" />
                                </button>
                            </div> */}
                            <form>
                                <Flex
                                    bg={THEME_LIGHT}
                                    p="4"
                                    pr="8"
                                    borderRadius={"xl"}
                                >
                                    <input
                                        autoFocus
                                        type="text"
                                        className="col-12 text-18 lh-12 bg-purple-3 text-dark-1 fw-500"
                                        placeholder="What do you want to learn?"
                                    />
                                    <Box className=" text-light-1 justify-center rounded-16 -hover-dshb-header-light">
                                        <RiSearch2Line
                                            color={THEME}
                                            size={20}
                                        />
                                    </Box>
                                </Flex>
                            </form>

                            <div className="header-search__content mt-30">
                                <div className="text-17 text-dark-1 fw-500">
                                    Popular Right Now
                                </div>

                                <div className="d-flex y-gap-5 flex-column mt-20">
                                    <a
                                        href="courses-single-1.html"
                                        className="text-dark-1"
                                    >
                                        The Ultimate Drawing Course - Beginner
                                        to Advanced
                                    </a>
                                    <a
                                        href="courses-single-2.html"
                                        className="text-dark-1"
                                    >
                                        Character Art School: Complete Character
                                        Drawing Course
                                    </a>
                                    <a
                                        href="courses-single-3.html"
                                        className="text-dark-1"
                                    >
                                        Complete Blender Creator: Learn 3D
                                        Modelling for Beginners
                                    </a>
                                    <a
                                        href="courses-single-4.html"
                                        className="text-dark-1"
                                    >
                                        User Experience Design Essentials -
                                        Adobe XD UI UX Design
                                    </a>
                                    <a
                                        href="courses-single-5.html"
                                        className="text-dark-1"
                                    >
                                        Graphic Design Masterclass - Learn GREAT
                                        Design
                                    </a>
                                    <a
                                        href="courses-single-6.html"
                                        className="text-dark-1"
                                    >
                                        Adobe Photoshop CC – Essentials Training
                                        Course
                                    </a>
                                </div>

                                <div className="mt-30">
                                    <button className="uppercase underline">
                                        PRESS ENTER TO SEE ALL SEARCH RESULTS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </ModalContent>
        </Modal>
    );
}
