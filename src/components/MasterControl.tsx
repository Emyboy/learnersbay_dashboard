import Cookies from "js-cookie";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MainAppStore } from "../interfaces";
import { getAuthDependencies, getAuthUser } from "../redux/actions/auth.actions";
import { getAllClassOptions } from "../redux/actions/options.actions";

export default function MasterControl() {
    const { class_categories, class_sub_categories, class_schedule_types } =
        useSelector((state: MainAppStore) => state.options);

    const { user, user_info } = useSelector((state:MainAppStore) => state.auth);   
        
    useEffect(() => {
        if (
            class_categories.length === 0 ||
            class_sub_categories.length === 0 ||
            class_schedule_types.length === 0
        ) {
            getAllClassOptions();
        }
    }, [class_categories, class_sub_categories, class_schedule_types]);

    useEffect(() => {
        if (Cookies.get("auth_token") && !user) {
            console.log('NO USER')
            getAuthUser();
        }
    }, [user]);

    useEffect(() => {
        if(user && !user_info){
            getAuthDependencies()
        }
    },[user, user_info])

    return null;
}
