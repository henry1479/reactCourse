
import '../App.css';
import { Route, Switch, Link } from 'react-router-dom';
import ChatPage from './chat/ChatPage';
import HomePage from './home/HomePage';
import ProfilePage from './profile/ProfilePage';
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
 

const myLogin = /^(Kostya)$/i;
function App() {

  // init state and function-setter
  // const [messages, setMessages] = useState([]);
  const dataLink = [
    {path:"/", name: "Home"},
    {path:"/profile", name:"Profile"},
    {path:"/chats", name: "Chat List"},
] 


  // //function handler onSubmit Form
  // //it get argument - object
  // const sendMessage = (message) => {
  //   // array is the last value of the state
  //   let messageArray = messages;
  //   // removing equal messages
  //   messageArray = messageArray.filter(el => el.author !== message.author || el.text !== message.text);
  //   // adding a copy of the object in the array
  //   messageArray.push({...message});
  //   // set the state
  //   setMessages([...messageArray]);
  // } 

  //send message accepting getting message 
  // useEffect(() => {
  //   //get a last object in the state
  //   let lastMessage = messages[messages.length - 1];
  //   let messageArray = messages;
  //   //if I send the meesage I will get message about ok!
  //   if (lastMessage&&myLogin.test(lastMessage.author)) {
  //     const responseMessage = { author: 'robot', text: `Dear ${lastMessage.author}, your message is sent!` }
  //     messageArray.push(responseMessage)
  //     const messageIntervalId = setTimeout(() => { setMessages([...messageArray]) }, 3000);

  //   }
  // }, [messages])



  return (
    <div className="App">
      <ul>
        {
          dataLink.map((item,index) => (<li key={index}> 
              <Link  to={item.path}>{item.name}</Link>
          </li>)
          )
        }
      </ul>
      <Switch>
          <Route path="/profile">
              <ProfilePage/>
          </Route>
          {/* <Route path="/chats">
            <ChatPage messages={null} sendMessage={sendMessage}/>
          </Route> */}
          <Route path="/chats/:chatId">
            <ChatPage />
          </Route>
          <Route path="/" exact>
              <HomePage/>
          </Route>
      </Switch>
      </div>
  );
}

export default App;
