import { AxiosRequestConfig } from "axios";
import axios from "axios";
import { API_URL } from "../CONSTANTS";
import Cookies from "js-cookie";

export class ApiRequest {
    apiRoute: string;
    apiOptions?: AxiosRequestConfig;
    isAuth?: boolean;

    constructor(
        api_route: string,
        options: AxiosRequestConfig,
        is_auth?: boolean,
    ) {
        this.apiRoute = api_route;
        this.apiOptions = options;
        this.isAuth = is_auth;
    }

    async go() {
        const res = await axios(API_URL + "/api" + this.apiRoute, {
            ...this.apiOptions,
            headers: {
                authorization: `${
                    this.isAuth ? `Bearer ${Cookies.get("auth_token")}` : ""
                }`,
            },
        });
        return res;
    }

    static getErrorMessageText(error: any): string {
        if (error?.response?.data?.message) {
            return error?.response?.data?.message;
        } else {
            return "Error, please try again";
        }
    }
}

export const API = async (
    url: string,
    is_auth: boolean,
    options?: AxiosRequestConfig,
) => {
    return await axios(API_URL + url, {
        ...options,
        headers: {
            authorization: is_auth
                ? `Bearer ${Cookies.get("auth_token")}`
                : null,
        },
    });
};
