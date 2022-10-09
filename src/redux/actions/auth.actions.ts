import { AuthService } from "../../services/index";
import Cookies from "js-cookie";
import store from "../store/store";
import { setViewState } from "./view.action";

export const setAuthState = (newState: any) => {
    store.dispatch({
        type: "SET_AUTH_STATE",
        payload: newState,
    });
};

export const getAuthUser = async (_attempts = 0) => {
    let attempts = _attempts;
    if (attempts < 5) {
        try {
            setViewState({ app_loading: true });
            console.log("GETTING AUTH DATA --", attempts);
            const res = await AuthService.getAuthProfile();
            setAuthState({
                user: res,
            });
            console.log("FOUND USER AUTH --", res);
            setViewState({ app_loading: false });
            return res;
        } catch (error) {
            // setViewState({ app_loading: false})
            setTimeout(() => {
                getAuthUser(attempts + 1)
            }, 5000);
            return Promise.reject(error);
        }
    }
};

export const getAuthDependencies = async () => {
    try {
        const res = await AuthService.getAuthUserDependencies();
        setAuthState(res);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const updateUserInfo = async (update: any) => {
    try {
        await AuthService.updateUserInfo(update);
        getAuthDependencies();
    } catch (error) {
        return Promise.reject(error);
    }
};

export const logout = () => {
    sessionStorage.clear();
    Cookies.remove("auth_token");
    setViewState({
        app_loading: true,
    });
    setAuthState({
        user_info: null,
        email_setting: null,
        user: null,
        file_storage: null,
    });
};
