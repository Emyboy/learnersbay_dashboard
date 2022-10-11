import { Box, Button, Text } from "@chakra-ui/react";
import { ClassData } from "../../interfaces/index";
import { displayPrice } from "../../utils/Class.utils";
import React from "react";
import { MdEdit } from "react-icons/md";
import { SM_THUMBNAIL_HEIGHT, SM_THUMBNAIL_WIDTH } from "../../CONSTANTS";

type Props = {
    data: ClassData;
};

export function EachClassListing({ data }: Props) {
    return (
        <Box className="col-12" mb="10">
            <Box
                shadow={"base"}
                className="coursesCard shadow -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
            >
                {/* <div className="coursesCard__image max-w-250"> */}
                <div>
                    
                    <img
                        className="rounded-8"
                        src={data.attributes.thumbnail_sm}
                        alt={data.attributes.title}
                        width={SM_THUMBNAIL_WIDTH}
                        height={SM_THUMBNAIL_HEIGHT}
                    />
                    {/* <div
                        className="rounded-8"
                        style={{
                            backgroundImage: `url(${data.attributes.thumbnail_sm})`,
                            height: "200px",
                            width: "200px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    /> */}
                </div>

                <div
                    className="coursesCard__content pl-20 sm:pl-10 pr-10"
                    style={{ width: "100%" }}
                >
                    <div className="coursesCard__stars">
                        <img
                            src="/img/coursesCards/icons/review.svg"
                            alt="review"
                        />
                    </div>
                    <Text className="text-17 lh-13 fw-500 text-dark-1 mt-10 ">
                        {data.attributes.title?.slice(0, 70)}
                    </Text>

                    <div className="d-flex x-gap-15 items-center py-10">
                        <div className="d-flex items-center">
                            <div className="mr-10">
                                <img
                                    src="/img/coursesCards/icons/1.svg"
                                    alt="icon"
                                />
                            </div>
                            <div className="text-14 lh-1 text-light-1">
                                6 lesson
                            </div>
                        </div>

                        <div className="d-flex items-center">
                            <div className="mr-10">
                                <img
                                    src="/img/coursesCards/icons/2.svg"
                                    alt="icon"
                                />
                            </div>
                            <div className="text-14 lh-1 text-light-1">
                                3h 56m
                            </div>
                        </div>

                        <div className="d-flex items-center">
                            <div className="mr-10">
                                <img
                                    src="/img/coursesCards/icons/3.svg"
                                    alt="icon"
                                />
                            </div>
                            <div className="text-14 lh-1 text-light-1">
                                Beginner
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                        <div className="d-flex items-center">
                            {/* <img src="/img/general/avatar-1.png" alt="image" />
                            <div className="text-light-1 ml-10">Ali Tufan</div> */}
                            <Button bg="red.100" size="sm">
                                Unpublish
                            </Button>
                            <Button bg="green.100" size="sm" ml="4">
                                <MdEdit /> Edit
                            </Button>
                        </div>

                        <div className="d-flex items-center">
                            {/* <div className="text-light-1 fw-500 mr-10 line-through">
                                $179
                            </div> */}
                            <div className="text-18 fw-500 text-dark-1">
                                ${displayPrice(data.attributes.max_price)}
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
}
