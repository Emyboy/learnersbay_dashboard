import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import { ApiRequest } from "../../utils/API.utils";


const SignupSchema = Yup.object().shape({
    identifier: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
});

type Props = {
    onErrorMessage: (message_text: string) => void;
    done: (e: any) => void;
};

export default function LoginForm({ onErrorMessage, done }: Props) {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (data: any) => {
        try {
            setLoading(true);
            const res = await new ApiRequest(
                `/auth/local`,
                {
                    data,
                    method: "POST",
                },
                false,
            ).go();
            setLoading(false);
            if (done) {
                done(res.data);
            }
        } catch (error: any) {
            setLoading(false);
            if (error?.response?.data?.error?.message) {
                onErrorMessage(error?.response?.data?.error?.message);
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
                    handleSubmit({
                        ...values,
                    });
                }}
            >
                {({ errors, touched }) => (
                    <>
                        <Form className="contact-form respondForm__form row y-gap-20 pt-30">
                            <div className="col-lg-12">
                                <label
                                    className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                                    htmlFor={"email"}
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="identifier"
                                    placeholder="Ex. John@email.com"
                                />
                                {errors.email && touched.email ? (
                                    <div className="text-orange-1">
                                        {errors.email}
                                    </div>
                                ) : null}
                            </div>

                            <div className="col-lg-12">
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
                                />
                                {errors.password && touched.password ? (
                                    <div className="text-orange-1">
                                        {errors.password}
                                    </div>
                                ) : null}
                            </div>

                            <div className="col-12">
                                <button
                                    type="submit"
                                    name="submit"
                                    id="submit"
                                    disabled={loading}
                                    className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                                >
                                    Login
                                </button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </>
    );
}
