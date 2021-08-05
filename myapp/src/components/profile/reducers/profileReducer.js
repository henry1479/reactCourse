export const initialState = {
    profile: {
        name: 'Kostya',
        lastName: 'Tsyplenkov',
        isShowData: true,
    }
}



 const profileReducer = (state = initialState,action)=> {
    switch(action.type) {
        case 'TOGGLE_DATA':
            return {
                ...state,
                profile: {...state.profile,
                isShowData: !state.profile.isShowData
                }
            }
            

        default:
            return state

    }

    
   
}

export default profileReducer


