import { combineReducers } from 'redux';
import chatListReducer from './reducers/chatListReducer';
import  profileReducer  from './reducers/profileReducer';
import postsPageReducer from './reducers/postsPageReducer';

// объеденяем редьюсеры
export const rootReducer = combineReducers({
    profileReducer,
    chatListReducer,
    postsPageReducer,
})




