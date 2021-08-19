import { useParams,Route,Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMessageListFirebase } from '../store/selectors/selectorsFirebase';
import { db } from '../../index.js';
import { NoChat } from './NoChat';
import Form from './Form';
import { useState,useCallback,useEffect } from 'react';
import { addMessageWithFirebase, initMessageTracking } from '../store/actions/addMessageFireBase'
// component realizes paragraphs with sent messages
// and authors of messages






function MessageList() {
    const { Id }  = useParams();

    const messages  = useSelector(getMessageListFirebase);
    // const [ messages, setMessages] = useState([]);
    const dispatch = useDispatch();


//     const onAddMessage = useCallback((message)=>{
//         db()
//         .ref("chats")
//         .child(Id)
//         .child('messages')
//         .push(message);
//    },
//    [Id]
//  );

   


    // получает и отрисовывает сообщения из базы данных
    // useEffect(() => {
    //     db().ref("chats").child(Id).child('messages').on("value", (snapshot) => {
        
    //       const newMessages = [];
    
    //       snapshot.forEach(entry => {
    //         newMessages.push({id: entry.key, ...entry.val()});
    //       });
    //       setMessages(newMessages);
    //     });
    //   }, [Id]);



      const onAddMessageFirebase = useCallback(
        (message) => {
          dispatch(
            addMessageWithFirebase(Id, message)
          );
    
        },
        [Id]
      );
    
      useEffect(() => {
        dispatch(initMessageTracking(Id));
      }, [Id]);
    

       // елси нет правильного чата 
    // отправляем к компонету NoChat
    // if (Id !== id) {
    //     return <Redirect to="/nochat" />;
    // }

     
  
    return (
        <div className="messages-wrapper">
            <h3>Messages</h3>
            <div className="messages-list">
               
                {
                   messages.map((message) =>{return <p key={message.id} className="message"> Author: {message.author} Text: {message.text}</p>;})
                }
            </div> 
            <div>             
                <Form  onAddMessage={onAddMessageFirebase}/>
                <Route path="/nochat" exact>
                    <NoChat />
                </Route>
            </div>
        </div>
    
    )
}


export default MessageList