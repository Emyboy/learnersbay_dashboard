import { OptionsAction, OptionsState } from "../../interfaces/index";

const initialState: OptionsState = {
    class_categories: [],
    class_sub_categories: [],
    class_languages: [],
    class_schedule_types: [],
};

const OptionsReducer = (state = initialState, { type, payload }: OptionsAction) => {
    switch (type) {
        case "SET_OPTIONS_STATE":
            return { ...state, ...payload };

        default:
            return state;
    }
};

export default OptionsReducer;
