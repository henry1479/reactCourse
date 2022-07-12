import { useSelector, useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';

import { List,ListItem,ListItemText} from '@material-ui/core';
// import { FormGroup, InputLabel, Input, Button } from '@material-ui/core';

import { NavLink, Route } from 'react-router-dom';
import MessageList from './MessageList';
// import { setNewChat } from './actions/addChat'


//реализует список чатов

function ListChat ( {render} ) {
    const { chats } = useSelector((state)=>state.chatListReducer);
    const [ chat, setChat ]= useState('');
    const dispatch = useDispatch();

    const handleChange = useCallback((event)=>{
        setChat(event.target.value);
    },[]);

    const addNewChat = useCallback(()=>{
        dispatch({type:'CHAT::ADD_CHAT', payload:chat})},
        [dispatch, chat]
    );
        
   

    
    console.log(chats)
    return (
        <>
        <div style={{float:'left',width:'30%'}}>
            <List>
                {render("chat-head")}
                { Object.keys(chats).map((id, i) => (
                        <ListItem key={i}>
                            <NavLink to={`/chats/${id}`} style={{textDecoration: 'none',}} activeStyle={{color: 'red', textDecoration: 'none',}}>
                                <ListItemText>
                                    {chats[id].name}
                                </ListItemText>
                            </NavLink>
                        </ListItem>
                    )
                )   
                }
            </List>
            <form action="#">
                <label htmlFor="name">Enter name of new friend</label>
                <input type="text" name="friend-name" onChange={handleChange}/>
                <input type="submit" value="Add" onClick={addNewChat} / >
            </form>
        </div>
        <Route path="/chats/:Id" >
            <MessageList />
        </Route>
   </>

    );
}
    
  




    
  

export default ListChat