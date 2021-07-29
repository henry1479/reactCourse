
import '../App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import ChatPage from './chat/ChatPage';
import HomePage from './home/HomePage';
import ProfilePage from './profile/ProfilePage';
import MessageList from './chat/MessageList';

import { useState, useEffect } from 'react';
import {
  ThemeProvider,
  useTheme,
  createTheme,
 } from "@material-ui/core/styles";



 const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9800",
    },
  },
 });

// это чаты
 const initChat = {
  id_1: {
      name:'Dan',
      messages: [{text:'Hello!', author: 'Dan'}]
  },
  id_2: {
      name:'John',
      messages: [{text:'Hello, Kostya!', author: 'John'}]
  },
  id_3: {
      name:'Terry',
      messages: [{text:'How are you, Kostya!', author: 'Terry'}]
  },
  id_4: {
      name:'Kate',
      messages: [{text:'What\'s app, Kostya!', author: 'Kate'}]
  },
}
 

const myLogin = /^(Kostya)$/i;

function App() {
  //это ссылки в ChatList
  const dataLink = [
    {path:"/", name: "Home"},
    {path:"/profile", name:"Profile"},
    {path:"/chats", name: "Chat List"},
  ] 




  //стейты чатов и id
  const[chats, setChats] = useState(initChat);
  const[chatId, setChatId] = useState('id_1');

  //получаем id из MessageList
  const getId = (id) => {
    setChatId(id)
  }

 
 
  //отправлям сообщение в соотвествующий чат
  //проблема только в том, что MessageList
  //не рендерится заново после отправки сообщения
  const sendMessage = (message) => {
    let chat = chats[chatId];
    chat.messages.push(message);
    chats[chatId] = {
       ...chat
    };
    setChats(chats);
    // попытка перенаправить на ту ж страницу чата
    return <Redirect to ={`/chats/:${chatId}`} />
    
  }


  //ответ робота тоже работает плохо
  useEffect(() => {
    let lastMessage =  chats[chatId].messages[chats[chatId].messages.length - 1];
    let messageArray =  chats[chatId].messages;
    //if I send the meesage I will get message about ok!
    if (lastMessage&&myLogin.test(lastMessage.author)) {
      const responseMessage = { author: 'robot', text: `Dear ${lastMessage.author}, your message is sent!` }
      messageArray.push(responseMessage);
      chats[chatId].messages = messageArray;
      const messageIntervalId = setTimeout(() => { setChats(chats) }, 3000);

    }
  }, [chats]);

  

 
 

  return ( 
      
    <div className="App">
      <header> 
        <ul style={{listStyleType: 'none',}}>
          {
            dataLink.map((item,index) => (<li  key={index}> 
                <NavLink exact style={{textDecoration: 'none',}} activeStyle={{color: 'red',}} to={item.path}>{item.name}</NavLink>
            </li>)
            )
          }
        </ul>
      </header>
      
      <main>
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/chats" >
                <ChatPage sendMessage={sendMessage}
                    chats={chats} 
                    />
                    {/* чаты работают только после помещения их сюда */}
                <Route path="/chats/:Id" >
                    <MessageList data={chats} handleChange={getId} />
                </Route>
            </Route>
            <Route path="/profile">
                <ProfilePage/>
            </Route>
            {/* переход на несуществующую страницу */}
            <Route render={()=><h1 style={{color: 'red', textAlign: 'center'}}>Not found 404</h1>}/>
        </Switch>
      </main>
      
    </div>
  );

  
}

export default App;
