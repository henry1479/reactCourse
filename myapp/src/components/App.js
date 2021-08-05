
import '../App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import ChatPage from './chat/ChatPage';
import HomePage from './home/HomePage';
import ProfilePage from './profile/ProfilePage';
import {
  ThemeProvider,
  useTheme,
  createTheme,
 } from "@material-ui/core/styles";



 const theme = createTheme({
  palette: {
    primary: {
      main: "#e6e6fa",
      second: "#c71585"
    },
  },
 });





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
      <ThemeProvider theme={theme}>
        <main>
          <Switch>
              <Route path="/" exact>
                  <HomePage/>
              </Route>
              <Route path="/chats" >
                  <ChatPage 
                  />
              </Route>
              <Route path="/profile">
                  <ProfilePage/>
              </Route>
              <Route render={()=><h1 style={{color: 'red', textAlign: 'center'}}>Not found 404</h1>}/>
          </Switch>
        </main>
      </ThemeProvider>
      
      
    </div>
  );
}
export default App