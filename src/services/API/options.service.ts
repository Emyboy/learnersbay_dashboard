import { ApiRequest } from "../../utils/API.utils";

export class OptionsService {
    static getAllClassCategories() {
        const res = new ApiRequest("/class-categories?populate=*", {}).go();
        return res;
    }
    static getAllClassLanguages() {
        const res = new ApiRequest("/class-languages?populate=*", {}).go();
        return res;
    }
    static getClassScheduleTypes() {
        const res = new ApiRequest("/class-schedule-types?populate=*", {}).go();
        return res;
    }
}
