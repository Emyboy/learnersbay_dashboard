import {
    Avatar,
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { THEME, THEME_LIGHT } from "../../CONSTANTS";
import {
    RiMoreFill,
    RiHeartLine,
    RiChat3Line,
    RiShareForwardLine,
    RiSendPlaneFill,
} from "react-icons/ri";

const iconSize = 20;

export default function EachFeed() {
    return (
        <Box as="article" bg="white" px="2" py="5" mb="1">
            <Flex>
                <VStack>
                    <Avatar p="3" bg={THEME} name={"S M"} mb="2" />
                    <Avatar p="3" size={'sm'} name={"JK M"} />
                    <Avatar p="3" size={'sm'} name={"MJ L"} />
                    <Avatar p="3" size={'sm'} name={"CK S"} />
                </VStack>
                <VStack width="100%" ml="3">
                    <Flex width="100%" justifyContent={"space-between"}>
                        <VStack alignItems={"start"}>
                            <Text as="h6" fontWeight={"medium"}>
                                Fist Name
                            </Text>
                            <Text fontSize={"14"} className="m-0 text-dark-3">
                                @username
                            </Text>
                        </VStack>

                        <Button
                            variant={"ghost"}
                            size="xs"
                            className="text-light-1 justify-center size-50  -hover-dshb-header-light -hover-text-purple"
                        >
                            <i className="text-24 icon icon-option">
                                <RiMoreFill
                                    className="text-dark-3"
                                    size={iconSize}
                                />
                            </i>
                        </Button>
                    </Flex>
                    <Box pb='4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Distinctio quae similique expedita nihil,
                            magnam ex atque voluptate dolorum ad sunt
                            dignissimos accusantium dolor reprehenderit
                            recusandae quia vero sit sint? Recusandae.
                        </p>
                    </Box>
                    <Divider color={THEME_LIGHT} />
                    <HStack
                        justifyContent={"space-between"}
                        alignItems="start"
                        width={"100%"}
                        pr="2"
                    >
                        <HStack>
                            <Button
                                // bg={THEME_LIGHT}
                                variant="ghost"
                                className="-hover-dshb-header-light -hover-text-purple"
                            >
                                <i className="d-flex align-items-center text-24 icon icon-option">
                                    <RiHeartLine
                                        className="text-purple-4"
                                        size={iconSize}
                                    />
                                </i>
                                <Text color={THEME} ml="2">
                                    Like
                                </Text>
                            </Button>
                            <Button
                                // bg={THEME_LIGHT}
                                variant="ghost"
                                className="-hover-dshb-header-light -hover-text-purple"
                            >
                                <i className="d-flex align-items-center text-24 icon icon-option">
                                    <RiChat3Line
                                        className="text-purple-4"
                                        size={iconSize}
                                    />
                                </i>
                                <Text color={THEME} ml="2">
                                    Comment
                                </Text>
                            </Button>
                        </HStack>
                        <Button
                            // bg={THEME_LIGHT}
                            variant="ghost"
                            className="-hover-dshb-header-light -hover-text-purple"
                        >
                            <i className="d-flex align-items-center text-24 icon icon-option">
                                <RiShareForwardLine
                                    className="text-purple-4"
                                    size={iconSize}
                                />
                            </i>
                            {/* <Text color={THEME} ml="2">
                                Share
                            </Text> */}
                        </Button>
                    </HStack>
                    {/* <Divider color={THEME_LIGHT} /> */}
                    <HStack
                        width="100%"
                        borderWidth={"thin"}
                        borderColor={THEME_LIGHT}
                        borderRadius="lg"
                        p="2"
                        justifyContent={"space-between"}
                        mt="3"
                    >
                        <Avatar size={"sm"} name="John Doe" />{" "}
                        <Input
                            borderWidth={0}
                            placeholder="Type comment here..."
                        />
                        <Button
                            // bg={THEME_LIGHT}
                            variant="ghost"
                            className="-hover-dshb-header-light -hover-text-purple"
                        >
                            <i className="d-flex align-items-center text-24 icon icon-option">
                                <RiSendPlaneFill
                                    className="text-purple-4"
                                    size={iconSize}
                                />
                            </i>
                        </Button>
                    </HStack>
                </VStack>
            </Flex>
        </Box>
    );
}
