import React from "react";
import {
    ChakraProvider,
    extendTheme,
    withDefaultColorScheme,
    theme as baseTheme,
} from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { THEME, THEME_LIGHT } from "../CONSTANTS";

const Providers = ({ children }: any) => {
    const theme = extendTheme(
        {
            colors: {
                primary: {
                    main: THEME,
                    300: THEME_LIGHT,
                    400: THEME_LIGHT,
                    500: THEME,
                    600: THEME,

                    900: THEME,
                },
            },
            // breakpoints,
        },
        withDefaultColorScheme({
            colorScheme: "primary",
        }),
    );

    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <div>{children}</div>
            </ChakraProvider>
        </Provider>
    );
};
export default Providers;
