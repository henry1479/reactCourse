export const ADD_CHAT = 'CHAT::ADD_CHAT';

export const setNewChat = (newName) => ({
    type: ADD_CHAT,
    payload: newName,
})
