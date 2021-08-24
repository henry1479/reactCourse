
import { toggleData } from '../../actions/toggleData';
import profileReducer from '../profileReducer';
import { initialState } from '../profileReducer';
import '@testing-library/jest-dom/extend-expect';



describe('profileReducer', () => {
    it('вызов редьюсера без экшена вернет initialState', () => {
        const result = profileReducer();
        expect(result).toEqual(initialState);
    });


    it('изменение стейта на отдиспатченный экшен из компоненета',() => {

        const result = profileReducer(undefined,toggleData());
        expect(result).toEqual({
            profile: {
                name: 'Kostya',
                lastName: 'Tsyplenkov',
                isShowData: !initialState.profile.isShowData,
            }
        })

    })
})