import React from "react";
import { Link } from "react-router-dom";
import {
    RiUser6Line,
    RiChat1Line,
    RiPlayCircleLine,
    RiNotification2Line,
    RiBarChart2Line,
} from "react-icons/ri";
import { Box, Hide } from "@chakra-ui/react";
import { TABLET_BREAK_POINT } from "../../CONSTANTS";

export default function SideNav() {
    return (
        <div
            className="dashboard__sidebar -base scroll-bar-1 border-right-light lg:px-30"
            style={{ marginTop: "0px", minHeight: "100vh" }}
        >
            <div className="sidebar -base-sidebar">
                <div className="sidebar__inner">
                    <div>
                        <Hide breakpoint={`(max-width: ${TABLET_BREAK_POINT}px)`}>
                            <EachNavContainer navHeading="Pages">
                                <EachNav
                                    icon={<RiBarChart2Line />}
                                    isActive
                                    name="Overview"
                                    to="/"
                                />
                                <EachNav
                                    icon={<RiUser6Line />}
                                    isActive={false}
                                    name="Home"
                                    to="/"
                                />
                                <EachNav
                                    icon={<RiChat1Line />}
                                    isActive={false}
                                    name="Messages"
                                    to="/"
                                />
                                <EachNav
                                    icon={<RiPlayCircleLine />}
                                    isActive={false}
                                    name="My Learning"
                                    to="/"
                                />
                                <EachNav
                                    icon={<RiNotification2Line />}
                                    isActive={false}
                                    name="Activities"
                                    to="/"
                                />
                            </EachNavContainer>
                        </Hide>
                        <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">
                            General
                        </div>
                        <div>
                            <div className="sidebar__item ">
                                <Link
                                    to="/explore"
                                    className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
                                >
                                    <i className="text-20 icon-discovery mr-15"></i>
                                    Explore
                                </Link>
                            </div>

                            <div className="sidebar__item">
                                <Link
                                    to="/forum"
                                    className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
                                >
                                    <i className="text-20 icon-comment mr-15"></i>
                                    Forum
                                </Link>
                            </div>

                            <div className="sidebar__item ">
                                <Link
                                    to="/"
                                    className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
                                >
                                    <i className="text-20 icon-play-button mr-15"></i>
                                    Courses
                                </Link>
                            </div>

                            <div className="sidebar__item ">
                                <Link
                                    to="/"
                                    className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
                                >
                                    <i className="text-20 icon-time-management mr-15"></i>
                                    My Calendar
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-60">
                        <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">
                            Pages
                        </div>
                        <div className="">
                            <div className="">
                                <div className="accordion js-accordion">
                                    <div className="accordion__item">
                                        <div className="accordion__button py-10 px-20 bg-light-4 rounded-16">
                                            <span className="text-16 fw-500 text-dark-1">
                                                About
                                            </span>
                                            <div className="accordion__icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="feather feather-chevron-down icon size-20 mt-5"
                                                >
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="feather feather-chevron-up icon size-20"
                                                >
                                                    <polyline points="18 15 12 9 6 15"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="accordion__content">
                                            <div className="accordion__content__inner px-30 pt-15 pb-10">
                                                <div className="sidebar__links y-gap-5">
                                                    <div>to="/"</div>
                                                    <div>to="/"</div>
                                                    <div>to="/"</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <Link
                                    to="/"
                                    className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                                >
                                    Contact
                                </Link>
                            </div>

                            <div className="">
                                <Link
                                    to="/"
                                    className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                                >
                                    Pricing
                                </Link>
                            </div>

                            <div className="">
                                <Link
                                    to="/"
                                    className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                                >
                                    Help
                                </Link>
                            </div>

                            <div className="">
                                <Link
                                    to="/"
                                    className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                                >
                                    Faq
                                </Link>
                            </div>

                            <div className="">
                                <Link
                                    to="/"
                                    className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                                >
                                    Term
                                </Link>
                            </div>

                            <div className="">
                                <Link
                                    to="/"
                                    className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                                >
                                    Privacy
                                </Link>
                            </div>

                            <div className="">
                                <Link
                                    to="/"
                                    className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                                >
                                    Setting
                                </Link>
                            </div>
                            {/* <br /> */}
                            <div className="py-30" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const EachNavContainer = ({ children, navHeading }: any) => {
    return (
        <Box mb="10">
            <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">
                {navHeading}
            </div>
            <div>{children}</div>
        </Box>
    );
};

interface Props {
    to: string;
    isActive: boolean;
    name: string;
    icon: any;
}

const EachNav = ({ to, isActive, name, icon }: Props) => {
    return (
        <div className={`sidebar__item ${isActive && "-is-active"}`}>
            <Link
                to={to}
                className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
            >
                <i className="text-20 mr-15">{icon}</i>
                {name}
            </Link>
        </div>
    );
};
