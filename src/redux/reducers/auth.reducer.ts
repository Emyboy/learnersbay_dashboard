import { AuthAction, AuthState } from "../../interfaces/index";

const initialState: AuthState = {
    user: null,
    user_info: null,
    email_setting: null
};

const AuthReducer = (state = initialState, { type, payload }: AuthAction) => {
    switch (type) {
        case "SET_AUTH_STATE":
            return { ...state, ...payload };
        case "LOGOUT":
            return { state: initialState, ...payload };

        default:
            return state;
    }
};

export default AuthReducer;
