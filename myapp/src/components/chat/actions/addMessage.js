export const ADD_MESSAGE = 'CHAT::ADD_MESSAGE';

export const setMessage = (newMessage) => ({
    type: ADD_MESSAGE,
    payload: newMessage
})

