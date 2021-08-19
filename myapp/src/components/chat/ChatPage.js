import { useParams } from 'react-router-dom';
import MessageList from './MessageList';
import ListChat from './ListChat';
import { Route } from 'react-router-dom'



// реализует страницу чата без MessageList


const ChatPage =() => {
    const { Id } = useParams();
    return(
        <>
        <ListChat   id={Id} render={(className) =>(<h3 className={className}>Chat List</h3>)}/>
            <Route path="/chats/:Id">
                <MessageList />
            </Route>
        </>
    )
}


export default ChatPage