import {
    FETCH_MESSAGE_LIST,
    REMOVE_MESSAGE_WITH_ID
} from '../types/message'

export function fetchMessageList(params) {
    return {
        type: FETCH_MESSAGE_LIST,
        payload: {
            request: {
                method: 'GET',
                url: `/search/repositories`,
                params
            }
        }
    }
}

export function deleteMessage(itemId) {
    return {
        type: REMOVE_MESSAGE_WITH_ID,
        payload: {
            itemId
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