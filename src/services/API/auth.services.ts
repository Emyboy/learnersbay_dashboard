import { UserInfo } from "../../interfaces/index";
import { ApiRequest } from "../../utils/API.utils";
import Cookies from "js-cookie";

export class AuthService {
    static async getAuthUserDependencies() {
        const res = await new ApiRequest(
            "/user-info/dependencies",
            {
                headers: {
                    authorization: `${Cookies.get("auth_token")}`,
                },
            },
            true,
        ).go();
        return res.data;
    }

    static async updateUserInfo(update: UserInfo) {
        const res = await new ApiRequest(
            "/user-info/update",
            {
                //  headers: {
                //      authorization: `${Cookies.get("auth_token")}`,
                //  },
                method: 'POST',
                data: {
                    data: update,
                },
            },
            true,
        ).go();
        return res.data;
    }

    static async getAuthProfile() {
        const res = await new ApiRequest(
            "/users/me",
            {
                headers: {
                    authorization: `${Cookies.get("auth_token")}`,
                },
            },
            true,
        ).go();
        return res.data;
    }
}
