import { Route } from 'react-router';
import ListChat from './ListChat';
import MessageList from './MessageList';

// реализует страницу чата без MessageList


const ChatPage =(props) => {
    

    return(
        <>
        <ListChat chats={props.chats}  render={(className) =>(<h3 className={className}>Chat List</h3>)}/>
        </>
    )
}


export default ChatPage