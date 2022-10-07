import React from "react";
import {Link} from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoginForm  from "../../components/Auth/LoginForm";
import AuthLayout from "../../components/Auth/AuthLayout";
import { MainAppStore } from "../../interfaces/index";
import Cookies from "js-cookie";
import { setAuthState } from "../../redux/actions/auth.actions";


export default function Login() {
    const { user } = useSelector((state: MainAppStore) => state.auth);
    const toast = useToast();

    useEffect(() => {
        if (user) {
            // router.push("/");
        }
    }, [user]);

    return (
        <AuthLayout>
            <>
                <h3 className="text-40 fw-bold lh-13">Login</h3>
                <p className="mt-10">
                    {`Don't have an account yet?`}{" "}
                    <Link to={"/register"} className="text-purple-1">
                        Sign up for free
                    </Link>
                </p>

                <LoginForm
                    onErrorMessage={(message: string) => {
                        toast({
                            title: message.replace("or Username are", "is"),
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                            position: "top",
                        });
                    }}
                    done={(e: any) => {
                        Cookies.set("auth_token", e.jwt, { expires: 7 });
                        setAuthState({
                            user: e.user,
                        });
                        toast({
                            title: "Welcome back",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                            position: "top",
                        });
                    }}
                />

                <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                    Or sign in using
                </div>

                <div className="d-flex x-gap-20 items-center justify-between pt-20">
                    <div>
                        <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                            Log In via Facebook
                        </button>
                    </div>
                    <div>
                        <Link to="/">
                            <button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
                                Log In via Google+
                            </button>
                        </Link>
                    </div>
                </div>
            </>
        </AuthLayout>
    );
}
