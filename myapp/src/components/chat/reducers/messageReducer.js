
const initialState = {
    messages: [{author: 'German', text: 'Hello!'}]
}

const messageReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CHAT::ADD_MESSAGE':
            const currentState=state;
            currentState.messages.push(action.payload)
            return {
                ...state,
                ...currentState
            }
        default:
            return state

    }
}

export default messageReducer