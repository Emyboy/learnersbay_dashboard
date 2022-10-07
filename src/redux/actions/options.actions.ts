import store from "../../redux/store/store";
import { OptionsService } from "../../services/API/options.service";
import { ApiRequest } from "../../utils/API.utils";

export const setOptionsState = (newState: any) => {
    store.dispatch({
        type: "SET_OPTIONS_STATE",
        payload: newState,
    });
};

export const getClassCategories = async () => {
    try {
        const res = await new ApiRequest(
            "/class-categories?populate=*",
            {
                method: "GET",
            },
            false,
        ).go();
        setOptionsState({
            class_categories: res.data.data,
        });
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getClassSubCategories = async () => {
    try {
        const res = await new ApiRequest(
            "/class-sub-categories?populate=*",
            {
                method: "GET",
            },
            false,
        ).go();
        setOptionsState({
            class_sub_categories: res.data.data,
        });
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getAllClassLanguages = async () => {
    try {
        const res = await OptionsService.getAllClassLanguages();
        setOptionsState({
            class_languages: res.data.data
        });
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getClassScheduleTypes = async () => {
    try {
        const res = await OptionsService.getClassScheduleTypes();
        setOptionsState({
            class_schedule_types: res.data.data
        });
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getAllOptions = async () => {
    getClassCategories();
    getClassSubCategories();
};

export const getAllClassOptions = async () => {
    getClassCategories();
    getClassSubCategories();
    getAllClassLanguages();
    getClassScheduleTypes();
};
