import { useParams,Route,Redirect } from 'react-router-dom';
import { useEffect, useState, useCallback} from 'react';
import { NoChat } from './NoChat';
import Form from './Form'
// component realizes paragraphs with sent messages
// and authors of messages




const myLogin = /^(Kostya)$/i;

function MessageList(props) {
  
    const [chats, setChats] = useState(props.data)
    const params = useParams();

    // отправляем сообщение
    const sendMessage = useCallback(
        (message) => {
            let chat = chats[params.Id];
            chat.messages.push(message); 
            setChats({
                ...chats,
                [params.Id] : chat,
                messages: chat.messages
            })
        }, [params.Id]
    
    )
   console.log('message', )
   
    
    // ответ робота
    useEffect(() => {
        let chat = chats[params.Id];
        let lastMessage =  chat.messages[chat.messages.length - 1];
        if (lastMessage&&myLogin.test(lastMessage.author)) {
            const responseMessage = { author: 'robot', text: `Dear ${lastMessage.author}, your message is sent!` }
            chat.messages.push(responseMessage);
            let timeoutId = setTimeout(()=>setChats({
                ...chats,
                [params.Id] : chat,
                messages: chat.messages
            }),2000)
        }
        
    }, [chats]);

 
    // елси нет правильного чата 
    // отправляем к компонету NoChat
    if (!chats[params.Id]) {
        return <Redirect to="/nochat" />;
    }

  
    return (
        <div className="messages-wrapper">
            <h3>Messages</h3>
            <div className="messages-list">
                {
                    chats[params.Id].messages.map((message, number) =>{return <p key={number.toString()} className="message"> Author: {message.author} Text: {message.text}</p>;})
                }
                
                <Form sendMessage={sendMessage} />
                <Route path="/nochat" exact>
                    <NoChat />
                </Route>
            </div>
        </div>
    
    )
}


export default MessageList