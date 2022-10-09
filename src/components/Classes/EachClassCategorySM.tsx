import { Box } from "@chakra-ui/react";
import { ClassCategory } from "../../interfaces/index";
import React from "react";
import { THEME_DARK_TRANSPARENT, THEME_LIGHT } from "../../CONSTANTS";

type Props = {
    data: ClassCategory;
    onSelect?: (e: ClassCategory) => void;
    isSelected?: boolean;
};

export function EachClassCategorySM({ data, onSelect, isSelected }: Props) {
    return (
        <Box
            id="each-class-cat-sm"
            className="col-xl-4 col-lg-4 col-sm-6"
            py={["7", "10", "3"]}
            borderWidth={[isSelected ? "1px" : "0px", "0px"]}
            shadow={isSelected ? "md" : "none"}
            bg={isSelected ? THEME_LIGHT : ""}
            borderColor={THEME_DARK_TRANSPARENT}
            mb={["0", "5"]}
            borderRadius={["0", "md"]}
            onClick={() => (onSelect ? onSelect(data) : {})}
        >
            <Box className="categoryCard -type-2">
                <div className="categoryCard__image mr-20">
                    <Box
                        style={{
                            backgroundImage: `url(${data.attributes.image_url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        p="10"
                        borderRadius={"md"}
                    />
                </div>

                <div className="categoryCard__content">
                    <h4 className="categoryCard__title text-17 fw-500">
                        {data.attributes.name}
                    </h4>
                    <div className="categoryCard__text text-13 lh-1 mt-5">
                        573+ Courses{" "}
                    </div>
                </div>
            </Box>
        </Box>
    );
}
