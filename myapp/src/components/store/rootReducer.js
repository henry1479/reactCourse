import { combineReducers } from 'redux';
import  profileReducer  from '../profile/reducers/profileReducer';

// объеденяем редьюсеры
export const rootReducer = combineReducers({
    profileReducer,
})




