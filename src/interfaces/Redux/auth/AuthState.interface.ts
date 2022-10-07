import { ClassCategory } from "../options/Class.interface";
import { User } from "./Auth.interface";

export interface AuthState {
    user: User | null;
    user_info: UserInfo | null;
    email_setting: UserEmailSettings | null;
}

export interface UserEmailSettings {
    course_update: boolean;
}

export interface UserInfo {
    linkedin_url: boolean;
    interested_categories:  ClassCategory[]
    interested_sub_categories:  ClassCategory[]
}

export interface AuthAction {
    type: string;
    payload: AuthState;
}
