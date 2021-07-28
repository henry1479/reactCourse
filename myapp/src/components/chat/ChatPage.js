import Form from './Form';
import MessageList from './MessageList';
import ListChat from './ListChat';
import { useState} from 'react';
import { useParams } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';

const initChat = {
    id_1: {
        name: 'Dan',
        messages: [{text:'Hello!', author: 'Dan'}]
    },
    id_2: {
        name: 'John',
        messages: [{text:'Hello, Kostya!', author: 'John'}]
    }
}

const ChatPage =(props) => {
    const { chatId } = useParams();
    // const [messages, setMessages] = useState([]);
    const[chats, setChatInfo] = useState(initChat);

    //function handler onSubmit Form
  //it get argument - object
  const sendMessage = (message) => {
    // array is the last value of the state
    let object = chats[chatId];
    object.messages.push(message);
    chats[chatId] = object;
    setChatInfo(chats)
    console.log(chats)

    // removing equal messages
    // messageArray = messageArray.filter(el => el.author !== message.author || el.text !== message.text);
    // adding a copy of the object in the array

    // messageArray.push({...message});
    // set the state
    // setMessages([...messageArray]);
  } 

  



 

     

    return(
        
        <>
        {console.log(chatId)}
        <Form handleChange={sendMessage} />
        <ListChat chats={chats} render={(className) =>(<h3 className={className}>Chat List</h3>)}/>
        <MessageList data={chats[chatId]} />  
        </>
    )
}


export default ChatPage