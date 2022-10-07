import { ViewAction, ViewState } from "../../interfaces/index";

const initialState: ViewState = {
    show_drawer: true,
    app_loading: false,
    verify_email_popup: false,
    show_search: false,
};

const ViewReducer = (state = initialState, { type, payload }: ViewAction) => {
    switch (type) {
        case "SET_VIEW_STATE":
            return { ...state, ...payload };

        default:
            return state;
    }
};
export default ViewReducer;
