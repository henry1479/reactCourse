import { useParams,Route,Redirect } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import { NoChat } from './NoChat';
import Form from './Form'
// component realizes paragraphs with sent messages
// and authors of messages




const myLogin = /^(Kostya)$/i;

function MessageList(props) {

    const { messages } = useSelector((state)=>state.messageReducer)

    
  
    const params = useParams();
    const [chats, setChats] = useState(props.data);
    
   
    
    

    
    
    // // ответ робота
    // useEffect(() => {
    //     let lastMessage =  chats[params.Id].messages[chats[params.Id].messages.length - 1];
    //     //if I send the meesage I will get message about ok!
    //     if (lastMessage&&myLogin.test(lastMessage.author)) {
    //         const responseMessage = { author: 'robot', text: `Dear ${lastMessage.author}, your message is sent!` }
    //         chats[params.Id].messages.push(responseMessage);
    //     }
        
    // }, [chats[params.Id]]);

 
    // елси нет правильного чата 
    //отправляем к компонету NoChat
    // if (!chats[params.Id]) {
    //     return <Redirect to="/nochat" />;
    // }

  
    return (
        <div className="messages-wrapper">
            <h3>Messages</h3>
            <div className="messages-list">
               
                {
                   messages.map((message, number) =>{return <p key={number.toString()} className="message"> Author: {message.author} Text: {message.text}</p>;})
                }
                
                <Form />
        
                <Route path="/nochat" exact>
                    <NoChat />
                </Route>
            </div>
        </div>
    
    )
}


export default MessageList