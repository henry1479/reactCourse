
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
 


function App() {

  // init state and function-setter
  const [messages, setMessages] = useState([]);


  //function handler onSubmit Form
  //it get argument - object
  const sendMessage = (object) => {
    // array is the last value of the state
    let array = messages;
    // adding a copy of the object in the array
    object = {...object}
    array.push(object)
    // set the state
    setMessages([...array]);
  }

  //send message accepting getting message 
  useEffect(() => {
    //get a last object in the state
    let obj = messages[messages.length - 1];
    let array = messages;
    //my login
    const myLog = /^(Kostya)$/i;
    // if the object do not exist to create new object 
    obj = (obj === undefined || obj === null) ? { author: ' ', message: '' } : obj;
    //if I send the meesage I will get message about ok!
    if (myLog.test(obj.author)) {
      const responseMessage = { author: 'robot', text: `Dear ${obj.author}, your message is sent!` }
      array.push(responseMessage)
      const messageIntervalId = setTimeout(() => { setMessages([...array]) }, 3000);

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
