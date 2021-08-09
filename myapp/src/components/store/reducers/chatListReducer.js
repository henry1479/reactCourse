


const initialState = {
   chats: {
        id_1: {
            name: 'Dan',
            messages: [{author:'Dan', text: 'hello,kostya'}]

        },
        id_2: {
            name: 'Stan',
            messages: [{author:'Stan', text: 'How are you,Kostya!'}]
        },
    }
}

  


const chatListReducer = (state=initialState, action) => {
    const currentObject = state.chats || {}
    
    switch (action.type){
       
        case 'CHAT::ADD_CHAT': 
            let index = Object.keys(currentObject);
            if(index.length === 0) {
                index = ['id_0']
            }
            let lastIndex = index[(index.length-1)][3];
            let newIndex = `id_${Number(lastIndex)+1}`;
            if(action.payload === '') {
                action.payload = 'No name'
            }
            console.log(newIndex)
            return {
                ...state,
                chats: {...currentObject,
                    [newIndex]:{
                        name: action.payload,
                        messages: []
                    }}
                }
       
        case 'CHAT::ADD_MESSAGE':
            console.log('message',action.id)
            const robotResponse= {author:'Robot', text: `${action.payload.author} message is send`}
            currentObject[action.id].messages.push(action.payload);
            return {
                ...state,
                [action.id]:{...currentObject[action.id].messages}
            } 

        case 'CHAT::REMOVE_CHAT':
            console.log(action.payload);
            delete currentObject[action.payload]
            return {
                ...state,
                chats: {
                    ...currentObject
                }
            }

        default:
            return state
    }

   
}


export default chatListReducer