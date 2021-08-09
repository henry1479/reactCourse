export const ADD_MESSAGE = 'CHAT::ADD_MESSAGE';

export const setMessage = (newMessage,id) => ({
    type: ADD_MESSAGE,
    payload: newMessage,
    id: id
})

