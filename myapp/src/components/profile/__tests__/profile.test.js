
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import { toggleData } from '../../store/actions/toggleData';




const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('ProfilePage', () => {
    it('диспачится ли экшен из контейнера', () => {
        const initialState = {}
        const store = mockStore(initialState)
        store.dispatch(toggleData())
        const actions = store.getActions()
        const expectedPayload = { type: 'TOGGLE_DATA' }
        expect(actions).toEqual([expectedPayload])
    })
})