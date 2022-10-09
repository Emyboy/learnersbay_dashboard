import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { PageHeading } from "./PageHeading";

type Props = {
    children: ReactElement[] | ReactElement;
    pageHeading?: string;
    pageSubHeading?: string;
};

export function PageContent({ children, pageHeading, pageSubHeading }: Props) {
    return (
        <Box
            pt={["0", "0"]}
            pb="20"
            px={["2", "5", "5", "5", "20", "40"]}
            className="dashboard__content bg-light-4 animate__animated animate__fadeIn"
        >
            {pageHeading && (
                <PageHeading
                    pageHeading={pageHeading}
                    pageSubHeading={pageSubHeading}
                />
            )}
            <Box style={{ minHeight: "60vh" }}>{children}</Box>
        </Box>
    );
}
