import { CHANGE_MESSAGES } from "../actions/addMessageFireBase";
import { CHANGE_CHATS } from "../actions/addChatFireBase"

const initialState = {
  messages: [],
  chats: []
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHATS: {

        return {
          ...state,
          chats: action.payload
        };
    }
    case CHANGE_MESSAGES: {
   
      return {
        ...state,
        messages: action.payload
      };
    }
    
    default:
      return state;
  }
};