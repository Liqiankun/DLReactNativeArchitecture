import {
    FETCH_MESSAGE_LIST,
    REMOVE_MESSAGE_WITH_ID,
    INCREASE_UNREAD_COUNT
} from '../types/message'

export function fetchMessageList(params) {
    return {
        type: FETCH_MESSAGE_LIST,
        payload: {
            request: {
                method: 'GET',
                url: '/search/repositories',
                params
            }
        }
    }
}

export function increaseUnreadCount() {
    return {
        type: INCREASE_UNREAD_COUNT
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

export function composeMessage(name) {
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
