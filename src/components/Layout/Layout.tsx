import React, { ReactElement } from "react";
import FooterNav from "./FooterNav";
import Header from "./Header";
import SideNav from "./SideNav";
import { useWindowSize } from "react-use";
import { TABLET_WIDTH } from "../../CONSTANTS";

type Props = {
    children: ReactElement[] | ReactElement;
    full_screen?: boolean;
};

export default function Layout({ children, full_screen }: Props) {
    const { width } = useWindowSize();

    return (
        <>
            <div className="barba-container" data-barba="container">
                <main className="main-content">
                    <Header />
                    <div className="content-wrapper js-content-wrapper">
                        <div
                            className={`dashboard -home-9 px-0 js-dashboard-home-9 pt-0 mt-0 ${
                                width < TABLET_WIDTH
                                    ? "-is-sidebar-hidden"
                                    : ""
                            }`}
                        >
                            <SideNav />
                            <div className="dashboard__main mt-0">
                                <div
                                    className={`scroll-bar-1 ${
                                        !full_screen ? "dashboard__content" : ""
                                    }`}
                                    style={{
                                        // paddingBottom: width < TABLET_WIDTH ? "17vh": "10vh",
                                        // paddingTop:
                                        //     width < 990 ? "2vh" : "6vh",
                                        // minHeight: "100vh",
                                        height: "100vh",
                                        maxHeight: "100vh",
                                        overflowY: 'scroll',
                                        overflowX: 'hidden'
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterNav />
                </main>
            </div>
        </>
    );
}
