import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMessageListFirebase } from '../store/selectors/selectorsFirebase';
import { NoChat } from './NoChat';
import Form from './Form';
import { useCallback,useEffect } from 'react';
import { addMessageWithFirebase, initMessageTracking } from '../store/actions/addMessageFireBase'


// компонент реализует список сообщений 
// для соответствующего чата
function MessageList({id}) {
    // константа для сообщений из редьюсера
    const messages  = useSelector(getMessageListFirebase);
    const dispatch = useDispatch();
    
   
    

    // отправляет сообщения в fb

    const onAddMessageFirebase = useCallback(
        (message) => {
          dispatch(
            addMessageWithFirebase(id, message)
          );
    
        },
        [id,dispatch]
      );

    // направляет сообщения в редьюсер через мидлвэр
    
    useEffect(() => {
    dispatch(initMessageTracking(id));
    }, [id]);

   
     
  
    return (
        <div className="messages-wrapper">
            <h3>Messages</h3>
            <div className="messages-list" >
               
                {
                   messages?.map((message) =>{
                       return <p key={message.id} className="message"><span>{message.author} </span>:<span> {message.text}</span> </p>;})
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