import {  useDispatch,useSelector } from 'react-redux';
import { db } from '../../index.js';
import { useState, useCallback, useEffect } from 'react';
import { addChatWithFirebase } from '../store/actions/addChatFireBase';
import { initChatTracking } from '../store/actions/addChatFireBase';
import { Chats }  from './Chats.js';
import MessageList from './MessageList.js';
import { Route,useParams} from 'react-router-dom';
import { getChatFirebase } from '../store/selectors/selectorsFirebase';



//реализует список чатов с формой для новых и списком сообщений
// имеет собственную функцию по отправке новых чатов в fb
// и получает их из Redux с помощью initChatTracking()

function ChatPage() {
    // селектор для получения чатов из редьюсера
    const chats  = useSelector(getChatFirebase);
    // стэйт для получения данных из поля ввода
    const [ chat, setChat] = useState('');
    let { Id } = useParams();
    const dispatch = useDispatch(); 
    console.log(Id)

    // получает данные из поля ввода и оправляет в стэйт
    const handleChange = useCallback((event)=>{  
        let value = event.target.value;
        setChat(value);
    },[Id]);

    // отправляет чат в fb
    const onAddChatFirebase = useCallback(
        () => {
            dispatch(
                addChatWithFirebase({chat})
            )
           
          },
          [chat,dispatch]
        );
 
    
    // направляет данные по чатам чаты из fb в редьюсер через мидлвэр
    useEffect(() =>{
        dispatch(initChatTracking())},
        [dispatch]
    )
    
    // удаляет выбранный чат прямо из fb
    const onRemoveChat = useCallback(()=> {
        db().ref('chats').child(Id).remove()
    },[Id]);


    // если все чаты удалены, то путь к чатам - пустая строка
    if(chats.length === 0) {
        Id = " ";
    }

        
    return (
        <>
            <Chats 
            onAddChatFirebase={onAddChatFirebase}
            onRemoveChat={onRemoveChat}
            id={Id}
            chat={chat}
            handleChange={handleChange} 
            chats={chats}
            />
            <Route path={`/chats/${Id}`}>
                <MessageList id={Id} />
            </Route>
        </>

    );
}
    
  

export default ChatPage;