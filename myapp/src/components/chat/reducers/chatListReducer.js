


const initialState = {
   chats: {
        id_1: {
            name: 'Dan',

        },
        id_2: {
            name: 'Stan',
        },
    }
}


// const index = Object.keys(currentChats);
// let lastIndex = index[(index.length-1)][3]
// let newIndex = `id_${Number(lastIndex)+1}`
// initialState.newIndex = { name: `${action.payload}`}
// console.log(initialState.newIndex)

const chatListReducer = (state=initialState, action) => {
    curr
    switch (action.type){
        case 'CHAT::ADD_CHAT': 
            const index = Object.keys(state.chats);
            let lastIndex = index[(index.length-1)][3];
            let newIndex = `id_${Number(lastIndex)+1}`;
            return {
                ...state,
                chats: {...state.chats,
                    [newIndex]:{name: action.payload}}
                } 

        default:
            return state
    }

   
}


export default chatListReducer