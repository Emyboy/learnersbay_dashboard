import { AuthState } from "./auth/AuthState.interface";
import { ClassState } from "./class/ClassState.interface";
import { OptionsState } from "./options/OptionsState.interface";
import { ViewState } from "./view/ViewState.interface";

export interface MainAppStore {
    auth: AuthState,
    view: ViewState,
    options: OptionsState,
    classes: ClassState,
}