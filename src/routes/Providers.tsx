import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../redux/store/store";

const Providers = ({ children }: any) => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <div>{children}</div>
            </ChakraProvider>
        </Provider>
    );
};
export default Providers;
