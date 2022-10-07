import { ApiRequest } from "../../utils/API.utils";

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
        const res = new ApiRequest(`/courses?populate=*&instructor=${instructor_id}`, {method: 'GET'}, false).go();
        return res;
    }
}
