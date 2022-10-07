export interface ViewState {
    show_drawer: boolean;
    app_loading: boolean;
    verify_email_popup: boolean;
    show_search: boolean;
}

export interface ViewAction {
    type: string;
    payload: ViewState;
}
