import { Provider } from 'react-redux';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Chats, chatsBlockTests } from '../Chats';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ChatPage from '../ChatPage';
import { CHANGE_CHATS } from '../../store/actions/addChatFireBase';
import { getChatFirebase } from '../../store/selectors/selectorsFirebase';
import { createStore } from 'redux';
import { rootReducer } from '../../store/rootReducer';




 





describe('Chats', () => {
    it('вывод текста ссылки в списке чатов из свойства chat объекта в массиве, переданного в комопонент из ChatPage через пропс chats ', ()=> {
        let myMock = jest.fn();

        myMock.mockReturnValue([{chat:'Kostya', id:'122323'}]);
        const chats = myMock();

        const component= render(<BrowserRouter><Chats chats={chats}/></BrowserRouter>);

        const received = component.getByTestId(chatsBlockTests.chatName).firstChild
        const [ expected ] = component.getAllByText(chats[0].chat);

        expect(received).toEqual(expected)

    }); 

    it('вызов обработчика handleChange,переданного через пропс из ChatPage,  на изменение значения поля ввода для имени чата', () => {
        const chat = "Vasya";
        const handleChange = jest.fn();
        const component = render(<BrowserRouter><Chats handleChange={handleChange} /></BrowserRouter>);
        fireEvent.change(component.getByTestId(chatsBlockTests.loginField), {target: {value: chat}});
        expect(handleChange).toBeCalled();
    })

})


describe('ChatPage', () => {
    it ('компонент диспачит экшен в стор для получения списка чатов из Firebase',  () => {
        const store = createStore(rootReducer);
        render(<Provider store={store}><ChatPage /></Provider>)
        const actions = store.getActions();
        const lastAction = actions[actions.length - 1];
        expect(lastAction).toEqual(getChatFirebase());
    });
    
})





