import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ApiRequest } from "../../utils";

const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(2, "Too Short!")
        .max(40, "Too Long!")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
        .matches(/^'?\p{L}+(?:[' ]\p{L}+)*'?$/u, "Invalid Name")
        .required("Required"),
    last_name: Yup.string()
        .min(2, "Too Short!")
        .max(40, "Too Long!")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
        .matches(/^'?\p{L}+(?:[' ]\p{L}+)*'?$/u, "Invalid Name")
        .required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

type Props = {
    onErrorMessage: (message_text: string) => void;
    role_id: number | null;
    done: (e: any) => void;
};

export function SignupForm({ onErrorMessage, role_id, done }: Props) {
    const [phone_number, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("NG");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (data: any) => {
        if (phone_number === "undefined") {
            onErrorMessage("Please provide phone number");
            return;
        }
        try {
            setLoading(true);
            const res = await new ApiRequest(
                `/auth/local/register`,
                {
                    data: {
                        ...data,
                        role_id,
                    },
                    method: "POST",
                },
                false,
            ).go();
            setLoading(false);
            console.log(res.data);
            if (done) {
                done(res.data);
            }
        } catch (error: any) {
            setLoading(false);
            if (error?.response?.data?.message) {
                onErrorMessage(error?.response?.data?.message);
            } else {
                onErrorMessage("Internal Server Error");
            }
            return Promise.reject(error);
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    if (values.confirm_password !== values.password) {
                        onErrorMessage("Passwords don't match");
                        return;
                    }
                    // same shape as initial values
                    handleSubmit({
                        ...values,
                        username: `${Math.random()
                            .toString(36)
                            .substr(2, 6)
                            .toUpperCase()}${Date.now()}`
                            .slice(0, 14)
                            .toLowerCase(),
                        phone_number,
                        country: country.toLowerCase(),
                        first_name: values.first_name.toLocaleLowerCase(),
                        last_name: values.last_name.toLocaleLowerCase(),
                        email: values.email.toLocaleLowerCase()
                    });
                }}
            >
                {({ errors, touched }) => (
                    <>
                        <Form className="contact-form respondForm__form row y-gap-20 pt-30">
                            <div className="col-lg-6">
                                <label
                                    className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                                    htmlFor={"first_name"}
                                >
                                    First Name
                                </label>
                                <Field
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    data-testid="first_name_input"
                                />
                                {errors.first_name && touched.first_name ? (
                                    <div
                                        className="text-orange-1"
                                        data-testid="first_name_error"
                                    >
                                        {errors.first_name}
                                    </div>
                                ) : null}
                            </div>
                            <div className="col-lg-6">
                                <label
                                    className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                                    htmlFor={"last_name"}
                                >
                                    Last Name
                                </label>
                                <Field
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    data-testid="last_name_input"
                                />
                                {errors.last_name && touched.last_name ? (
                                    <div
                                        className="text-orange-1"
                                        data-testid="last_name_error"
                                    >
                                        {errors.last_name}
                                    </div>
                                ) : null}
                            </div>
                            <div className="col-lg-6">
                                <label
                                    className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                                    htmlFor={"email"}
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Ex. John@email.com"
                                    data-testid="email_input"
                                />
                                {errors.email && touched.email ? (
                                    <div
                                        className="text-orange-1"
                                        data-testid="email_input_error"
                                    >
                                        {errors.email}
                                    </div>
                                ) : null}
                            </div>

                            <div className="col-lg-6">
                                <label
                                    className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                                    htmlFor={"phone_number"}
                                >
                                    Phone Number
                                </label>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={""}
                                    defaultCountry={"NG"}
                                    onChange={(e) => setPhoneNumber(String(e))}
                                    onCountryChange={(e) =>
                                        setCountry(
                                            String(e).toLocaleLowerCase(),
                                        )
                                    }
                                    data-testid="phone_number_input"
                                />
                            </div>
                            <div className="col-lg-6">
                                <label
                                    className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                                    htmlFor={"password"}
                                >
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="* * * * * * *"
                                    data-testid="password_input"
                                />
                                {errors.password && touched.password ? (
                                    <div className="text-orange-1">
                                        {errors.password}
                                    </div>
                                ) : null}
                            </div>
                            <div className="col-lg-6">
                                <label
                                    className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                                    htmlFor={"confirm_password"}
                                >
                                    Confirm Password
                                </label>
                                <Field
                                    type="password"
                                    name="confirm_password"
                                    placeholder="* * * * * * *"
                                    data-testid="confirm_password_input"
                                />
                                {errors.confirm_password &&
                                touched.confirm_password ? (
                                    <div className="text-orange-1">
                                        {errors.confirm_password}
                                    </div>
                                ) : null}
                            </div>
                            <div className="col-12">
                                <button
                                    type="submit"
                                    name="submit"
                                    id="submit"
                                    data-testid="form_submit_btn"
                                    disabled={!phone_number || loading}
                                    className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                                >
                                    Register
                                </button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </>
    );
}
