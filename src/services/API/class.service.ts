import { API, ApiRequest } from "../../utils/API.utils";

export class ClassService {
    static createNewClass(data: any) {
        const res = new ApiRequest(
            "/courses",
            {
                data: {
                    data,
                },
                method: "POST",
            },
            true,
        ).go();
        return res;
    }

    static getAllInstructorClasses(instructor_id: number) {
        const res = new ApiRequest(
            `/courses?populate=*&instructor=${instructor_id}`,
            { method: "GET" },
            false,
        ).go();
        return res;
    }

    static async updateClassData(class_id: number, newData: any) {
        const res = await API(`/course/update/${class_id}`, true, {
            method: "PUT",
            data: {
                data: {
                    ...newData,
                },
            },
        });
        return res;
    }
}
