import { combineReducers } from 'redux';
import chatListReducer from '../chat/reducers/chatListReducer';
import messageReducer from '../chat/reducers/messageReducer'
import  profileReducer  from '../profile/reducers/profileReducer';

// объеденяем редьюсеры
export const rootReducer = combineReducers({
    profileReducer,
    messageReducer,
    chatListReducer,


})




