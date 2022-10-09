import {
    Box,
    Button,
    Center,
    Flex,
    Spinner,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { THEME_DARK, THEME_LIGHT } from "../CONSTANTS";
import { MainAppStore } from "../interfaces";

export default function AppLoading() {
    const { app_loading } = useSelector((state: MainAppStore) => state.view);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setError(true);
        }, 25000);
    }, []);

    if (!app_loading) {
        return null;
    }

    return (
        <Box position={"fixed"} height="100vh" bg={THEME_DARK} zIndex="1000" shadow='lg' width="100vw">
            <Flex
                justifyContent={"center"}
                flex="1"
                h="100%"
                alignItems={"center"}
                flexDirection="column"
            >
                {!error ? (
                    <Spinner color={THEME_LIGHT} size={"lg"} />
                ) : (
                    <Center style={{ zIndex: 9111 }}>
                        <VStack>
                            <Text as="h2" fontSize={'2xl'} color={"white"}>Took too long</Text>
                            <Text pb="10" color={"white"}>
                                Please check your network and try again
                            </Text>
                            <Button
                                onClick={() => {
                                    setError(false);
                                    window.location.reload();
                                }}
                            >
                                Try Again
                            </Button>
                        </VStack>
                    </Center>
                )}
            </Flex>
        </Box>
    );
    // return (
    //     <div className="preloader js-preloader">
    //         <div
    //             className="preloader__bg bg-white"
    //             style={{ transform: `scale(1, 1)`, zIndex: 100 }}
    //         >
    //             <Flex
    //                 justifyContent={"center"}
    //                 flex="1"
    //                 h="100%"
    //                 alignItems={"center"}
    //                 flexDirection="column"
    //             >
    //                 {!error ? (
    //                     <Spinner color={THEME_LIGHT} size={"lg"} />
    //                 ) : (
    //                     <Center style={{ zIndex: 9111 }}>
    //                         <VStack>
    //                             <Text color={"white"}>Took too long</Text>
    //                             <Text pb="10" color={"white"}>
    //                                 Please check your network and try again
    //                             </Text>
    //                             <Button
    //                                 onClick={() => {
    //                                     setError(false);
    //                                     window.location.reload();
    //                                 }}
    //                             >
    //                                 Try Again
    //                             </Button>
    //                         </VStack>
    //                     </Center>
    //                 )}
    //             </Flex>
    //         </div>
    //     </div>
    // );
}
