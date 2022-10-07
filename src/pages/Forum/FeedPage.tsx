import { Box, Hide } from "@chakra-ui/react";
import React from "react";
import EachFeed from "../../components/Feed/EachFeed";


export default function FeedPage() {
    return (
        <div
        // className={`${width < TABLET_BREAK_POINT ? "" : "container-fluid"}`}
        >
            <div className="row justify-content-evenly mt-5">
                <Hide breakpoint="(max-width: 900px)">
                    <Box className='col-xl-3 col-lg-4 col-md-3 bg-purple-2' p="20">
                        <h1>Left</h1>
                    </Box>
                </Hide>
                <Box
                    className="col-lg-7 col-xl-5 col-md-7 scroll-bar-1 "
                    height={"99vh"}
                    maxHeight={"99vh"}
                    overflowY="scroll"
                    minWidth={['','560px']}
                >
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <Box height={"40"} />
                </Box>
                <Hide breakpoint="(max-width: 1490px)">
                    <Box
                        background="yellow"
                        className="col-3"
                        p="20"
                    >
                        <h1>Right</h1>
                    </Box>
                </Hide>
            </div>
        </div>
    );
}
