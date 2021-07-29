import { useParams,Route,Redirect } from 'react-router-dom';
import { useEffect,useState, useCallback} from 'react';
import { NoChat } from './NoChat';
// component realizes paragraphs with sent messages
// and authors of messages


function MessageList(props) {
  // стэйт здесь нужен только в экспериментальных целях
  // чтобы заствить принудительно ренедериться компонент
  const[chats, setChats] = useState(props.data);
  const params = useParams();
  

  //по идее должна была принудительно 
  //рендерить компонент
  const forceRender =()=> {
      setChats(chats);
  }


  // отдаем id в App
  useEffect(
    ()=>{props.handleChange(params.Id);},
    [params.Id]
  )

  //по идее это должно было работать так

  useCallback(
    () => {
      forceRender()
    },
    [chats],
  )

 
  // елси нет правильного чата 
  //отправляем к компонету NoChat
  if (!chats[params.Id]) {
    return <Redirect to="/nochat" />;
  }

  
  return (
    
    <div className="messages-wrapper">
      <h3>Messages</h3>
      <div className="messages-list">

      
        {
          chats[params.Id].messages.map((message, number) =>{return <p key={number.toString()} className="message"> Author: {message.author} Text: {message.text} {console.log(message)}</p>;})
        }
        <Route path="/nochat" exact>
          <NoChat />
        </Route>

      </div>
    </div>
    
  )
}


export default MessageList