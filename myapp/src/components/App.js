
import '../App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { useCallback } from 'react';
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

//это чаты
const initChat = {
    id_1: {
        name:'Dan',
        messages: [{author: 'Dan', text:'Hello!'},{author: 'Dan', text:'Hello!'}]
    },
    id_2: {
        name:'John',
        messages: [{author: 'John', text:'Hello, Kostya!', }]
    },
    id_3: {
        name:'Terry',
        messages: [{author: 'Terry', text:'How are you, Kostya!', }]
    },
    id_4: {
        name:'Kate',
        messages: [ {author:'Kate', text:'What\'s app, Kostya!',}]
    },
  }
   



function App() {
  //это ссылки в ChatList
  const dataLink = [
    {path:"/", name: "Home"},
    {path:"/profile", name:"Profile"},
    {path:"/chats", name: "Chat List"},
  ] 
  
  
 



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
                <Route path="/chats/:Id" >
                    <MessageList  data={initChat} />
                </Route>
                <ChatPage 
                    chats={initChat} 
                    />
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

  