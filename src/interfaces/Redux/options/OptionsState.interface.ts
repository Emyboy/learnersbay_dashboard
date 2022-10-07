import { ClassCategory } from "./Class.interface";

export interface OptionsState {
    class_categories: ClassCategory[];
    class_sub_categories: ClassCategory[];
    class_languages: ClassLanguage[];
    class_schedule_types: ClassScheduleType[];
}

export interface OptionsAction {
    type: string;
    payload: OptionsState;
}

export interface ClassLanguage {
    id: number;
    attributes: {
        name: string;
    }
}

export interface ClassScheduleType {
    id: number | null;
    attributes: {
        name: string;
        slug: string;
    }
}
