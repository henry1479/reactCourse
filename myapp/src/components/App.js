import '../App.css';
import { useEffect,useState,useCallback } from 'react';
import firebase from 'firebase';
import { Route, Switch, NavLink } from 'react-router-dom';
import ChatPage from './chat/ChatPage';
import HomePage from './home/HomePage';
import PostsPage from './posts/PostsPage';
import ProfilePage from './profile/ProfilePage';
import { SignUpContainer } from './authenticates/singup/SignUpContainer';
import { LoginContainer } from './authenticates/login/LoginContainer';
import PublicRoute  from '../hocs/PublicRoute';
import PrivateRoute  from '../hocs/PrivateRoute'

import {
  ThemeProvider,
  useTheme,
  createTheme,
 } from "@material-ui/core/styles";



 const theme = createTheme({
  palette: {
    primary: {
      main: "#e6e6fa",
      second: "#c71585",
      third: "#db7093n"
    },
  },
 });





function App() {

  //это ссылки в ChatList
  const dataLink = [
    {path:"/", name: "Home"},
    {path:"/profile", name:"Profile"},
    {path:"/chats", name: "Chat List"},
    {path:"/posts", name: "Posts"},
    {path:"/login", name: "Log In"},
    {path:"/signup", name: "Sign Up"},

  ] 

  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    })
  }, []);

  const logOut = useCallback(()=>{firebase.auth().signOut()},[]);

  console.log(authed);
  
  

  return ( 
      
    <div className="App">
      <header style={{marginBottom:'20px'}}> 
        <ul style={{listStyleType: 'none', paddingLeft: '0px'}}>
          {
            dataLink.map((item,index) => (<li  key={index}> 
                <NavLink exact style={{textDecoration: 'none',}} activeStyle={{color: 'red',}} to={item.path}>{item.name}</NavLink>
            </li>)
            )
          }
        </ul>
        <button type="button" className="logout-button" onClick={logOut}>Log out</button>
      </header>
      <ThemeProvider theme={theme}>
        <main>
          <Switch>
            <PublicRoute authenthicated={authed} path="/" exact>
                <HomePage/>
            </PublicRoute>
            <PublicRoute authenthicated={authed} path="/chats/:Id" >
                <ChatPage 
                />
            </PublicRoute>
            <PublicRoute authenthicated={authed} path="/chats" >
                <ChatPage 
                />
            </PublicRoute>
            <PublicRoute authenthicated={authed} path="/posts" >
                <PostsPage
                />
            </PublicRoute>
            <PrivateRoute authenticated={authed} path="/profile">
                <ProfilePage/>
            </PrivateRoute>
            <PublicRoute authenticated={authed}  path="/login">
                <LoginContainer />
            </PublicRoute>
            <PublicRoute authenticated={authed}  path="/signup">
                <SignUpContainer />
            </PublicRoute>
            <Route render={()=><h1 style={{color: 'red', textAlign: 'center'}}>Not found 404</h1>}/>
          </Switch>
        </main>
      </ThemeProvider>
      
      
    </div>
  );
}
export default App