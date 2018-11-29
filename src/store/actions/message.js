import {
    FETCH_MESSAGE_LIST
} from '../types/message'

export function fetchMessageList(search) {
    return {
        type: FETCH_MESSAGE_LIST,
        payload: {
            request: {
                method: 'GET',
                url: `/search/repositories`,
                params: {
                    q: search
                } 
            }
        }
    }
}

export function composeMessage() {
    return {
        type: FETCH_MESSAGE_LIST,
        payload: {
            request: {
                method: 'POST',
                url: `/users/${name}`,
                data: {}
            }
        }
    }
}