import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { PageHeading } from "./PageHeading";

type Props = {
    children: ReactElement[] | ReactElement;
    pageHeading?: string;
    pageSubHeading?: string;
    full_screen?: boolean;
};

export function PageContent({ children, pageHeading, pageSubHeading }: Props) {
    return (
        <Box
            pt={["0", "0"]}
            px={["2", "5", "5", "5", "20", "40"]}
            className={`bg-light-4 animate__animated animate__fadeIn`}
        >
            {pageHeading && (
                <PageHeading
                    pageHeading={pageHeading}
                    pageSubHeading={pageSubHeading}
                />
            )}
            <Box pb="60" style={{ minHeight: "60vh" }}>{children}</Box>

        </Box>
    );
}
