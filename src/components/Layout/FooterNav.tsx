import { Show } from "@chakra-ui/react";
import React from "react";
import {
    RiUser6Line,
    RiChat1Line,
    RiBarChart2Line,
    RiPlayCircleLine,
    RiNotification2Line,
} from "react-icons/ri";
import { TABLET_BREAK_POINT } from "../../CONSTANTS";

const iconSize = 27;

export default function FooterNav() {
    return (
        <Show breakpoint={`(max-width: ${TABLET_BREAK_POINT}px)`}>
            <footer
                className="shadow-4 -base-sidebar border-top-light bg-white js-header"
                style={{ position: "fixed", bottom: "0", left: 0, right: 0 }}
            >
                <div className="header__container py-8 px-10">
                    <div className="d-flex items-center justify-content-between">
                        <div className="relative">
                            <a
                                href="#c"
                                className="d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light text-dark-3"
                                data-el-toggle=".js-notif-toggle"
                            >
                                <i className="text-24 icon icon text-purple-1">
                                    <RiBarChart2Line size={iconSize} />
                                </i>
                            </a>
                        </div>
                        <div className="relative">
                            <a
                                href="#c"
                                className="d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light text-dark-3"
                                data-el-toggle=".js-notif-toggle"
                            >
                                <i className="text-24 icon icon">
                                    <RiNotification2Line size={iconSize} />
                                </i>
                            </a>
                        </div>
                        <div className="relative">
                            <a
                                href="#c"
                                className="d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light text-dark-3"
                                data-el-toggle=".js-notif-toggle"
                            >
                                <i className="text-24 ">
                                    <RiPlayCircleLine size={iconSize} />
                                </i>
                            </a>
                        </div>
                        <div className="relative">
                            <a
                                href="#c"
                                className="d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light text-dark-3"
                                data-el-toggle=".js-notif-toggle"
                            >
                                <i className="text-24 icon ">
                                    <RiChat1Line size={iconSize} />
                                </i>
                            </a>
                        </div>
                        <div className="relative">
                            <a
                                href="#c"
                                className="d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light text-dark-3"
                                data-el-toggle=".js-notif-toggle"
                            >
                                <i className="text-24 icon icon-user-2">
                                    <RiUser6Line size={iconSize} />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </Show>
    );
}
