import {
    Button,
    Center,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Text,
    Tooltip,
    VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { RiCheckLine } from "react-icons/ri";
import { is_mobile, THEME, THEME_LIGHT } from "../../../CONSTANTS";
import { FormsProps } from "./CreateClass.interface";

export default function ClassPrice({ ready }: FormsProps) {
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const savePrice = () => {
        if (price && price < 10) {
            setErrorMessage("Price is too low");
        } else if (price > 10 && ready) {
            setErrorMessage("");
            if (ready) {
                ready(price);
            }
        }
    };

    return (
        <div className="contact-form">
            <Center my="10" py="5">
                <VStack>
                    <InputGroup size="lg">
                        <InputLeftAddon
                            children="$"
                            bg={THEME_LIGHT}
                            fontSize={"large"}
                            color={THEME}
                            fontWeight="bold"
                        />
                        <CurrencyInput
                            id="input-example"
                            name="input-name"
                            placeholder="Please enter a number"
                            className=" chakra-input css-11yakcc pl-10 fw-500 border p-0"
                            style={{
                                fontSize: "20px",
                                outline: "none",
                                width: is_mobile ? "176px" : "200px",
                            }}
                            defaultValue={price}
                            decimalsLimit={2}
                            onValueChange={(value, name) =>
                                // console.log(value, name)
                                setPrice(parseInt(`${value}`))
                            }
                            autoFocus
                        />
                        <Tooltip
                            hasArrow
                            label="Click here to save value"
                            bg={THEME}
                            placement="top"
                        >
                            <InputRightAddon
                                children={
                                    <Button
                                        bg={THEME_LIGHT}
                                        onClick={savePrice}
                                    >
                                        <RiCheckLine size={25} />
                                    </Button>
                                }
                                // bg={THEME_LIGHT}
                                fontSize={"large"}
                                color={THEME}
                                px="0"
                                fontWeight="bold"
                            />
                        </Tooltip>
                    </InputGroup>
                    <Text as="small" color={"red.400"} fontWeight="bold">
                        {errorMessage}
                    </Text>
                </VStack>
            </Center>
        </div>
    );
}
