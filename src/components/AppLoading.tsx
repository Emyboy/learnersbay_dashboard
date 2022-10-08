import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { THEME_LIGHT } from "../CONSTANTS";
import { MainAppStore } from "../interfaces";

export default function AppLoading() {
    const { app_loading } = useSelector((state: MainAppStore) => state.view);

    if (!app_loading) {
        return null;
    }
    return (
        <div className="preloader js-preloader" style={{ zIndex: 90}}>
            <div
                className="preloader__bg bg-white"
                style={{ transform: `scale(1, 1)`, zIndex: 100 }}
            >
                <Flex
                    justifyContent={"center"}
                    flex="1"
                    h="100%"
                    alignItems={"center"}
                >
                    <Spinner color={THEME_LIGHT} size={"lg"} />
                </Flex>
            </div>
        </div>
    );
}
