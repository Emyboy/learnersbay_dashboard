import { Center, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import { THEME, THEME_LIGHT } from "../../../CONSTANTS";
import { FormsProps } from "./CreateClass.interface";


const currencies = [
    {
        short: "USD",
        symbol: "$",
        title: "Dollars",
    },
    {
        short: "NGN",
        symbol: "₦",
        title: "Naira",
    },
    {
        short: "EUR",
        symbol: "€",
        title: "Euro",
    },
];

export default function ClassPrice({ ready }: FormsProps) {
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (price && price < 10) {
            setErrorMessage("Price is too low");
        } else if(price > 10 && ready) {
            setErrorMessage("");
            if(ready){
                console.log('READY RUNNING')
                ready(price);
            }
        }
    }, [price, ready]);

    return (
        <div className="contact-form">
            <div className="row justify-content-center">
                {currencies.map((val) => {
                    return (
                        <div className="col-2" key={val.short}>
                            <button className="p-3 fw-500 button -xs -purple-3 text-purple-1">
                                {val.short}
                            </button>
                        </div>
                    );
                })}
                <Center my="10" py="5">
                    <div className="col-6">
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
                                className="text-center chakra-input css-11yakcc pl-10 fw-500 border p-0"
                                style={{
                                    fontSize: "20px",
                                    outline: "none",
                                }}
                                defaultValue={price}
                                decimalsLimit={2}
                                onValueChange={(value, name) =>
                                    // console.log(value, name)
                                    setPrice(parseInt(`${value}`))
                                }
                            />
                        </InputGroup>
                        <small className="text-danger">{errorMessage}</small>
                    </div>
                </Center>
            </div>
        </div>
    );
}
