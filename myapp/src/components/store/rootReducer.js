import { combineReducers } from 'redux';
import chatListReducer from './reducers/chatListReducer';
import  profileReducer  from './reducers/profileReducer';
import postsPageReducer from './reducers/postsPageReducer';
import {messagesReducer} from './reducers/firebaseReducer';

// объеденяем редьюсеры
export const rootReducer = combineReducers({
    profileReducer,
    chatListReducer,
    postsPageReducer,
    messagesReducer
})




