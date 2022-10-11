import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

type Props = {
    children: ReactElement | ReactElement[];
    heading?: string;
};

export function Card({ children, heading }: Props) {
    return (
        <Box className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            {heading && (
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">{heading}</h2>
                </div>
            )}
            <Box py="5" px="5">
                {children}
            </Box>
        </Box>
    );
}
