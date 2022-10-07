import React, { ReactElement } from "react";

type Props = {
    children: ReactElement;
};

export default function AuthLayout({ children }: Props) {
    return (
            <section className="form-page js-mouse-move-container">
                <div
                    className="form-page__img bg-dark-1"
                    style={{ paddingTop: "269px" }}
                >
                    <div className="form-page-composition">
                        <div className="-bg">
                            <img
                                data-move="30"
                                className="js-mouse-move"
                                src="img/login/bg.png"
                                alt="woman"
                                style={{
                                    transform: `translate(14.8971px, 14.3444px)`,
                                }}
                            />
                        </div>
                        <div className="-el-1">
                            <img
                                data-move="20"
                                className="js-mouse-move"
                                src="img/home-9/hero/bg.png"
                                alt="woman 2"
                                style={{
                                    transform: `translate(9.9314px, 9.563px)`,
                                }}
                            />
                        </div>
                        <div className="-el-2">
                            <img
                                data-move="40"
                                className="js-mouse-move"
                                src="img/home-9/hero/1.png"
                                alt="icon"
                                style={{
                                    transform: `translate(19.8628px, 19.1259px)`,
                                }}
                            />
                        </div>
                        <div className="-el-3">
                            <img
                                data-move="40"
                                className="js-mouse-move"
                                src="img/home-9/hero/2.png"
                                alt="icon"
                                style={{
                                    transform: `translate(19.8628px, 19.1259px)`,
                                }}
                            />
                        </div>
                        <div className="-el-4">
                            <img
                                data-move="40"
                                className="js-mouse-move"
                                src="img/home-9/hero/3.png"
                                alt="icon"
                                style={{
                                    transform: `translate(19.8628px, 19.1259px)`,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-page__content lg:py-50 bg-yellow-light">
                    <div className="container-fluid">
                        <div className="row justify-center items-center">
                            <div className="col-xl-7 col-lg-9 col-md-9">
                                <div className="px-50 py-50 md:px-25 lg:py-25 bg-white shadow-1 rounded-16">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
