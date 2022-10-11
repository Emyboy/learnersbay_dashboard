import { ClassService } from "../../services/API/class.service"
import { API } from "../../utils/API.utils"
import store from "../store/store"

export const setClassState = (newState:any) => {
    store.dispatch({
        type: 'SET_CLASS_STATE',
        payload: newState
    })
}

export const getAllInstructorClasses = async (user_id: number) => {
    try {
        const res = await ClassService.getAllInstructorClasses(user_id);
        setClassState({
            my_classes: res.data.data
        })
    } catch (error) {
        return Promise.reject(error)
    }
    
}