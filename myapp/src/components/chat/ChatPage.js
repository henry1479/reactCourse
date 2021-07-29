import Form from './Form';
import ListChat from './ListChat';
// реализует страницу чата без MessageList


const ChatPage =(props) => {


    return(
        <>
        <Form handleChange={props.sendMessage} />
        <ListChat chats={props.chats}  render={(className) =>(<h3 className={className}>Chat List</h3>)}/>
        </>
    )
}


export default ChatPage