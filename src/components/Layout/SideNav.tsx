import React from "react";
import { Link } from "react-router-dom";
import {
    RiUser6Line,
    RiChat1Line,
    RiPlayCircleLine,
    RiNotification2Line,
    RiBarChart2Line,
    RiListCheck2,
    RiAddCircleLine,
    RiCalendarTodoLine,
    RiParentLine,
    RiCompass3Line,
    RiDiscussLine,
    RiArtboardLine,
    RiCloseLine,
    RiStarLine,
} from "react-icons/ri";
import { Box, Button, Hide, HStack, Show } from "@chakra-ui/react";
import { CHAKRA_TABLET_BREAK_POINT, is_mobile, THEME } from "../../CONSTANTS";
import { useSelector } from "react-redux";
import { MainAppStore } from "../../interfaces";
import { setViewState } from "../../redux/actions/view.action";

export default function SideNav() {
    const { user } = useSelector((state: MainAppStore) => state.auth);

    return (
        <div
            className="dashboard__sidebar -base scroll-bar-1 border-right-light lg:px-30"
            style={{ marginTop: "0px", minHeight: "100vh" }}
        >
            <div className="sidebar -base-sidebar">
                <Show breakpoint={CHAKRA_TABLET_BREAK_POINT}>
                    <HStack
                        pt="5"
                        justifyContent={"end"}
                        onClick={() =>
                            setViewState({
                                show_drawer: false,
                            })
                        }
                    >
                        <Button variant={"ghost"} color={THEME}>
                            <RiCloseLine size={30} />
                        </Button>
                    </HStack>
                </Show>
                <div
                    className="sidebar__inner"
                    style={{ paddingTop: is_mobile ? "0" : "40px" }}
                >
                    <div>
                        <Hide breakpoint={CHAKRA_TABLET_BREAK_POINT}>
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
                                    name="Profile"
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
                        {user?.account_type === "instructor" && (
                            <EachNavContainer navHeading="Instructors">
                                <EachNav
                                    icon={<RiCalendarTodoLine />}
                                    isActive={false}
                                    name="My Schedule"
                                    to="/class/listings"
                                />
                                <EachNav
                                    icon={<RiParentLine />}
                                    isActive={false}
                                    name="Students"
                                    to="/students"
                                />
                                <EachNav
                                    icon={<RiListCheck2 />}
                                    isActive={false}
                                    name="My Classes"
                                    to="/classes"
                                />
                                <EachNav
                                    icon={<RiAddCircleLine />}
                                    isActive={false}
                                    name="Add New Class"
                                    to="/classes/new"
                                />
                                <EachNav
                                    icon={<RiStarLine />}
                                    isActive={false}
                                    name="Reviews"
                                    to="/reviews"
                                />
                            </EachNavContainer>
                        )}

                        {user?.account_type === "student" && (
                            <EachNavContainer navHeading="Student">
                                <EachNav
                                    icon={<RiCalendarTodoLine />}
                                    isActive={false}
                                    name="My Calender"
                                    to="/calendar"
                                />
                                <EachNav
                                    icon={<RiArtboardLine />}
                                    isActive={false}
                                    name="My Classes"
                                    to="/classes"
                                />
                            </EachNavContainer>
                        )}
                        <EachNavContainer navHeading="General">
                            <EachNav
                                icon={<RiCompass3Line />}
                                isActive={false}
                                name="Explore"
                                to="/explore"
                            />
                            <EachNav
                                icon={<RiDiscussLine />}
                                isActive={false}
                                name="Forum"
                                to="/forum"
                            />
                        </EachNavContainer>
                    </div>

                    <div className="mt-60">
                        <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">
                            Other Links
                        </div>
                        <div className="">
                            <div className="">
                                <Link
                                    to="/"
                                    className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                                >
                                    Blog
                                </Link>
                            </div>

                            <div className="">
                                <Link
                                    to="/"
                                    className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                                >
                                    FAQs
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
                                    Setting
                                </Link>
                            </div>
                            <br />
                            <div className="py-50" />
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
