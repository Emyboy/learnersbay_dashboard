import React from "react";


export default function EachClassCardSM() {
    return (
        <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1" className="is-in-view">
                <a
                    href="courses-single-1.html"
                    className="coursesCard -type-1 "
                >
                    <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-8">
                            <img
                                className="w-1/1"
                                src="img/coursesCards/1.png"
                                alt="class thumbnail"
                            />
                            <div className="coursesCard__image_overlay rounded-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                    </div>

                    <div className="h-100 pt-15">
                        <div className="d-flex items-center">
                            <div className="text-14 lh-1 text-yellow-1 mr-10">
                                4.5
                            </div>
                            <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div className="text-13 lh-1 ml-10">(1991)</div>
                        </div>

                        <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Learn Figma - UI/UX Design Essential Training
                        </div>

                        <div className="d-flex x-gap-10 items-center pt-10">
                            <div className="d-flex items-center">
                                <div className="mr-8">
                                    <img
                                        src="img/coursesCards/icons/1.svg"
                                        alt="button"
                                    />
                                </div>
                                <div className="text-14 lh-1">6 lesson</div>
                            </div>

                            <div className="d-flex items-center">
                                <div className="mr-8">
                                    <img
                                        src="img/coursesCards/icons/2.svg"
                                        alt="button"
                                    />
                                </div>
                                <div className="text-14 lh-1">3h 56m</div>
                            </div>

                            <div className="d-flex items-center">
                                <div className="mr-8">
                                    <img
                                        src="img/coursesCards/icons/3.svg"
                                        alt="button"
                                    />
                                </div>
                                <div className="text-14 lh-1">Beginner</div>
                            </div>
                        </div>

                        <div className="coursesCard-footer">
                            <div className="coursesCard-footer__author">
                                <img
                                    src="img/general/avatar-1.png"
                                    alt="user avatar"
                                />
                                <div>Ali Tufan</div>
                            </div>

                            <div className="coursesCard-footer__price">
                                <div>$179</div>
                                <div>$79</div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
