import { useParams,Route,Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMessageList } from './selectors/messageSelector';
import { NoChat } from './NoChat';
import Form from './Form';
import { useMemo } from 'react';
// component realizes paragraphs with sent messages
// and authors of messages






function MessageList(props) {
    const params = useParams();
    const selectedMessages = useMemo(()=> getMessageList(params.Id),[params.Id]);
    const  chatObj  = useSelector(selectedMessages);

     // елси нет правильного чата 
    // отправляем к компонету NoChat
    if (!chatObj) {
        return <Redirect to="/nochat" />;
    }
  
    return (
        <div className="messages-wrapper">
            <h3>Messages</h3>
            <div className="messages-list">
               
                {
                   chatObj.messages.map((message, number) =>{return <p key={number.toString()} className="message"> Author: {message.author} Text: {message.text}</p>;})
                }
            </div> 
            <div>             
                <Form id={params.Id} />
                <Route path="/nochat" exact>
                    <NoChat />
                </Route>
            </div>
        </div>
    
    )
}


export default MessageList