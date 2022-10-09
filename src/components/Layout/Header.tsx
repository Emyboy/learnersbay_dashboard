import { Avatar, Box } from "@chakra-ui/react";
import React from "react";
import { RiCalendarTodoLine, RiSearch2Line } from "react-icons/ri";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import { TABLET_WIDTH, THEME } from "../../CONSTANTS";
import { MainAppStore } from "../../interfaces";
import { setViewState } from "../../redux/actions/view.action";
import SearchPopup from "../Popups/SearchPopup";

export default function Header() {
    const { width } = useWindowSize();
    const { show_drawer } = useSelector((state: MainAppStore) => state.view);

    return (
        <header
            className="header- -base-sidebar border-bottom-light bg-white js-header"
            style={{ zIndex: 100 }}
        >
            <div
                className={`header__container ${
                    width < TABLET_WIDTH ? "py-10" : "py-20"
                } px-10`}
            >
                <div className="row justify-between items-center">
                    <div className="col-auto">
                        <div className="d-flex items-center">
                            <div className="header__explore text-dark-1">
                                <button
                                    className="d-flex items-center js-dashboard-home-9-sidebar-toggle"
                                    onClick={() =>
                                        setViewState({
                                            show_drawer: !show_drawer,
                                        })
                                    }
                                >
                                    <i className="icon -dark-text-white icon-explore text-20"></i>
                                </button>
                            </div>

                            <div className="header__logo ml-30 md:ml-20">
                                <Link data-barba="" to="/">
                                    <img
                                        className="-dark-d-none shadow-2"
                                        src="/logo.svg"
                                        alt="brand"
                                        width={'60'}
                                        style={{ borderRadius: '20px'}}
                                    />
                                </Link>
                            </div>

                            <div className="search-field rounded-16 -reverse-button -w-340 ml-90 xl:ml-20 lg:d-none">
                                {/* <input
                                    className="bg-light-4 pr-50"
                                    type="text"
                                    placeholder="What do you want to learn?"
                                /> */}
                                <div className="d-flex items-center text-14 text-dark-1">
                                    All Pages{" "}
                                </div>
                                {/* <button className="text-light-1" type="submit">
                                    <i className="icon-search text-20"></i>
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex items-center">
                            <div className="d-flex items-center ">
                                {/* HEADER ICONS HERE */}
                                <Box
                                    onClick={() => setViewState({ show_search: true})}
                                    cursor={'pointer'}
                                    className="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                                    data-el-toggle=".js-notif-toggle"
                                >
                                    <i className="text-24 icon"><RiSearch2Line /></i>
                                </Box>
                                <SearchPopup />
                                <Link
                                    to="/notifications"
                                    className="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                                    data-el-toggle=".js-notif-toggle"
                                >
                                    <i className="text-24 icon"><RiCalendarTodoLine /></i>
                                </Link>
                            </div>
                            <div className="relative d-flex items-center ml-10">
                                <Link
                                    to="/profile"
                                    data-el-toggle=".js-profile-toggle"
                                >
                                    <Avatar
                                        // src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`}
                                        bg={THEME}
                                        color="white"
                                        className="size-50"
                                        name="John Doe"
                                        borderRadius={"full"}
                                    />
                                    {/* <img
                                        src="img/misc/user-profile.png"
                                        alt="item"
                                    /> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
