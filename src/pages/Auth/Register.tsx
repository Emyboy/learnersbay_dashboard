import React, { useState, useEffect } from "react";
import { SignupForm } from "../../components/Auth/SignupForm";
import { Box, useToast } from "@chakra-ui/react";
import AuthLayout from "../../components/Auth/AuthLayout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { getAuthUser } from "../../redux/actions/auth.actions";
import { INSTRUCTOR_ROLE_ID, USER_ROLE_ID } from "../../CONSTANTS";
import { MainAppStore } from "../../interfaces/index";

const accountTypes = [
    {
        title: "I want to learn",
        role: USER_ROLE_ID,
        icon: <img src="img/home-5/learning/2.svg" alt="register option" />,
        sub_title: "Learn from anyone",
    },
    {
        title: "I want to teach",
        role: INSTRUCTOR_ROLE_ID,
        icon: <img src="img/home-5/learning/3.svg" alt="register option" />,
        sub_title: "Teach others your skill",
    },
];

const EachAccountType = styled.div`
    svg:hover {
        color: white;
    }
`;

export default function Register() {
    const [selectedRole, setSelectedRole] = useState<number | null>(null);
    const toast = useToast();
    const dispatch = useDispatch();
    const { user } = useSelector((state: MainAppStore) => state.auth);

    useEffect(() => {
        if (user) {
            // router.push("/");
        }
    }, [user]);

    if (user) {
        return null;
    }

    return (
        <AuthLayout>
            <>
                <h3 id="auth-heading" className="text-40 fw-bold lh-13">
                    Sign Up
                </h3>
                <p className="mt-10">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-purple-1">
                        Log in
                    </Link>
                </p>

                {!selectedRole ? (
                    <Box mt="7" className="animate__animated animate__fadeIn">
                        {accountTypes.map((val) => {
                            return (
                                <div
                                    className="col-xl-12"
                                    key={`role-${val.role}`}
                                    onClick={() => setSelectedRole(val.role)}
                                    id={`register-role-${val.role}`}
                                >
                                    <EachAccountType className="categoryCard -type-3 mb-4">
                                        <div className="categoryCard__icon bg-light-3 mr-20">
                                            <i className="text-35">
                                                {val.icon}
                                            </i>
                                        </div>
                                        <div className="categoryCard__content">
                                            <h4 className="categoryCard__title text-17 fw-500">
                                                {val.title}
                                            </h4>
                                            <div className="categoryCard__text text-13 lh-1 mt-3">
                                                {val.sub_title}
                                            </div>
                                        </div>
                                    </EachAccountType>
                                </div>
                            );
                        })}
                    </Box>
                ) : (
                    <div className="animate__animated animate__fadeIn">
                        <SignupForm
                            done={(e: any) => {
                                Cookies.set("auth_token", e.jwt, {
                                    expires: 7,
                                });
                                dispatch({
                                    type: "SET_AUTH_STATE",
                                    payload: {
                                        user: e.user,
                                    },
                                });
                                getAuthUser();
                            }}
                            role_id={selectedRole}
                            onErrorMessage={(message: string) => {
                                toast({
                                    title: message.replace(
                                        "or Username are",
                                        "is",
                                    ),
                                    description:
                                        "Please check the fields and try again",
                                    status: "error",
                                    duration: 9000,
                                    isClosable: true,
                                    position: "top",
                                });
                            }}
                        />
                    </div>
                )}
            </>
        </AuthLayout>
    );
}
