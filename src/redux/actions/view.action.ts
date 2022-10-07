import store from "../store/store";

export const setViewState = (newState: any) => {
    store.dispatch({
        type: "SET_VIEW_STATE",
        payload: newState,
    });
};


