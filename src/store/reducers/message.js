import {
    FETCH_MESSAGE_LIST,
    FETCH_MESSAGE_LIST_SUCESS,
    FETCH_MESSAGE_LIST_FAIL
} from '../types/message'

const initialState = {
    list: [],
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MESSAGE_LIST: 
            return {
                ...state,
                loading: true,
                list: [],
            }
        case FETCH_MESSAGE_LIST_SUCESS:
            return {
                ...state,
                loading: false,
                list: action.payload.data
            }
        case FETCH_MESSAGE_LIST_FAIL:
            return {
                loading: false,
                error: action.error.message
            }
        default: 
            return state
    }
}