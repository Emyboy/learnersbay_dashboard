import { ClassData } from "../options/Class.interface";

export interface ClassState {
    my_classes: ClassData[]
}

export interface ClassAction {
    type: string;
    payload: ClassState;
}
