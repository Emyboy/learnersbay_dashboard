import {
    ClassAction,
    ClassState,
} from "../../interfaces/Redux/class/ClassState.interface";

const initialState: ClassState = { my_classes: [] };

export default (state = initialState, { type, payload }: ClassAction) => {
    switch (type) {
        case "SET_CLASS_STATE":
            return { ...state, ...payload };

        default:
            return state;
    }
};
