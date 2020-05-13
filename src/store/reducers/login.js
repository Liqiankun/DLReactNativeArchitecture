import {
    CHNAGE_STACK
} from '../types/login'

const initialState = {
    isLaunching: true
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHNAGE_STACK:
            console.log('--------state', state.isLaunching)
            return {
                ...state,
                isLaunching: !state.isLaunching
            }
        default:
            return state
    }
}
