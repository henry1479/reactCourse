
import '../App.css';
import MessageList from './MessageList';
import Form from './Form';
import ListChat from './ListChat';
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
  const [messages, setMessages] = useState([]);


  //function handler onSubmit Form
  //it get argument - object
  const sendMessage = (message) => {
    // array is the last value of the state
    let messageArray = messages;
    // removing equal messages
    messageArray = messageArray.filter(el => el.author !== message.author || el.text !== message.text);
    // adding a copy of the object in the array
    messageArray.push({...message});
    // set the state
    setMessages([...messageArray]);
  } 

  //send message accepting getting message 
  useEffect(() => {
    //get a last object in the state
    let lastMessage = messages[messages.length - 1];
    let messageArray = messages;
    //if I send the meesage I will get message about ok!
    if (lastMessage&&myLogin.test(lastMessage.author)) {
      const responseMessage = { author: 'robot', text: `Dear ${lastMessage.author}, your message is sent!` }
      messageArray.push(responseMessage)
      const messageIntervalId = setTimeout(() => { setMessages([...messageArray]) }, 3000);

    }
  }, [messages])



  return (
    <div className="App">
      <header className="App-header">
       <ThemeProvider theme={theme}><Form handleChange={sendMessage} /></ThemeProvider>
      </header>
      <main className="App-main">
        <ListChat/>
        <MessageList data={messages} />
      </main>
    </div>
  );
}

export default App;
