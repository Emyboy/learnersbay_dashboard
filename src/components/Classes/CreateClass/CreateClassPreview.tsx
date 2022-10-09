import React from "react";

type Props = {};

export default function CreateClassPreview({}: Props) {
    return (
        <div className="bg-white shadow-2 rounded-8 border-light py-10 px-10">
            <div className="d-flex items-center py-10 mb-3 px-10 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Preview</h2>
            </div>
            <div className="relative">
                <img className="w-1/1" src="/img/misc/1.png" alt="image" />
                <div className="absolute-full-center d-flex justify-center items-center">
                    <a
                        className="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery"
                        data-gallery="gallery1"
                    >
                        <div className="icon-play text-18"></div>
                    </a>
                </div>
            </div>

            <div className="courses-single-info__content scroll-bar-1 pt-30 pb-20 px-20">
                <div className="text-24 lh-1 text-dark-1 fw-500 mb-4">
                    This is the name we are going to give the class for preview.
                </div>
                <div className="d-flex justify-between items-center mb-30">
                    <div className="text-24 lh-1 text-dark-1 fw-500">
                        $96.00
                    </div>
                    <div className="lh-1 line-through">$76.00</div>
                </div>

                <button className="button -md -purple-1 text-white w-1/1">
                    Enrol Now
                </button>
                {/* <button className="button -md -outline-dark-1 text-dark-1 w-1/1 mt-10">
                    Buy Now
                </button> */}

                <div className="text-14 lh-1 text-center mt-30">
                    30-Day Money-Back Guarantee
                </div>

                <div className="mt-25">
                    <div className="d-flex justify-between py-8 ">
                        <div className="d-flex items-center text-dark-1">
                            <div className="icon-video-file"></div>
                            <div className="ml-10">Lessons</div>
                        </div>
                        <div>20</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                        <div className="d-flex items-center text-dark-1">
                            <div className="icon-puzzle"></div>
                            <div className="ml-10">Quizzes</div>
                        </div>
                        <div>3</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                        <div className="d-flex items-center text-dark-1">
                            <div className="icon-clock-2"></div>
                            <div className="ml-10">Duration</div>
                        </div>
                        <div>13 Hours</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                        <div className="d-flex items-center text-dark-1">
                            <div className="icon-bar-chart-2"></div>
                            <div className="ml-10">Skill level</div>
                        </div>
                        <div>Beginner</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                        <div className="d-flex items-center text-dark-1">
                            <div className="icon-translate"></div>
                            <div className="ml-10">Language</div>
                        </div>
                        <div>English</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                        <div className="d-flex items-center text-dark-1">
                            <div className="icon-badge"></div>
                            <div className="ml-10">Certificate</div>
                        </div>
                        <div>Yes</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                        <div className="d-flex items-center text-dark-1">
                            <div className="icon-infinity"></div>
                            <div className="ml-10">Full lifetime access</div>
                        </div>
                        <div>Yes</div>
                    </div>
                </div>

                <div className="d-flex justify-center pt-15">
                    <a
                        href="#"
                        className="d-flex justify-center items-center size-40 rounded-full"
                    >
                        <i className="fa fa-facebook"></i>
                    </a>

                    <a
                        href="#"
                        className="d-flex justify-center items-center size-40 rounded-full"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>

                    <a
                        href="#"
                        className="d-flex justify-center items-center size-40 rounded-full"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>

                    <a
                        href="#"
                        className="d-flex justify-center items-center size-40 rounded-full"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
