import React from "react";


export function EachTutorClasses() {
    return (
        <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
            <div className="relative">
                <img
                    className="rounded-8 w-1/1"
                    src="img/coursesCards/6.png"
                    alt="class thumbnail"
                />

                <button
                    className="absolute-button"
                    data-el-toggle=".js-more-6-toggle"
                >
                    <span className="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8">
                        <i className="icon-menu-vertical"></i>
                    </span>
                </button>

                <div className="toggle-element -dshb-more js-more-6-toggle">
                    <div className="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8">
                        <a href="#c" className="d-flex items-center">
                            <div className="icon-share"></div>
                            <div className="text-17 lh-1 fw-500 ml-12">
                                Share
                            </div>
                        </a>

                        <a href="#c" className="d-flex items-center mt-20">
                            <div className="icon-bookmark"></div>
                            <div className="text-17 lh-1 fw-500 ml-12">
                                Favorite
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-15">
                <div className="d-flex y-gap-10 justify-between items-center">
                    <div className="text-14 lh-1">Ali Tufan</div>

                    <div className="d-flex items-center">
                        <div className="text-14 lh-1 text-yellow-1 mr-10">
                            4.5
                        </div>
                        <div className="d-flex x-gap-5 items-center">
                            <i className="icon-star text-9 text-yellow-1"></i>
                            <i className="icon-star text-9 text-yellow-1"></i>
                            <i className="icon-star text-9 text-yellow-1"></i>
                            <i className="icon-star text-9 text-yellow-1"></i>
                            <i className="icon-star text-9 text-yellow-1"></i>
                        </div>
                    </div>
                </div>

                <h3 className="text-16 fw-500 lh-15 mt-10">
                    Learn Figma - UI/UX Design Essential Training
                </h3>

                <div className="progress-bar mt-10">
                    <div className="progress-bar__bg bg-light-3"></div>
                    <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                </div>

                <div className="d-flex y-gap-10 justify-between items-center mt-10">
                    <div className="text-dark-1">% 20 Completed</div>
                    <div>25%</div>
                </div>
            </div>
        </div>
    );
}
