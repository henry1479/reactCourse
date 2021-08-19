import {  useDispatch,useSelector } from 'react-redux';
import { db } from '../../index.js';
import { useState, useCallback, useEffect } from 'react';
import { addChatWithFirebase } from '../store/actions/addChatFireBase';
import { initChatTracking } from '../store/actions/addChatFireBase';
import { List,ListItem,ListItemText} from '@material-ui/core';
import ChatPage from './ChatPage.js';
import { NavLink, Redirect } from 'react-router-dom';
import { getChatFirebase } from '../store/selectors/selectorsFirebase';



//реализует список чатов

function ListChat ( {render, id} ) {
    const chats  = useSelector(getChatFirebase);
 
    const [ chat, setChat] = useState('');
    const dispatch = useDispatch();

    const handleChange = useCallback((event)=>{  
        let value = event.target.value;
        setChat(value);
    },[id]);

    
    const onAddChatFirebase = useCallback(
        () => {
            dispatch(
                addChatWithFirebase({chat})
            )
           
          },
          [chat]
        );
 
    

    useEffect(() =>{
        dispatch(initChatTracking())},
        []
    )
    


    const onRemoveChat = useCallback(()=> {
        db().ref('chats').child(id).remove()
    },[id]);


    if(chats.length===0) return <Redirect to= "/chats"/>

    
        
    
    return (
        <>
        <div style={{
            float:'left',
            width:'40%',
            border: '1px solid #ccc',
            background: '#dda0dd',
            marginBottom: '5%',
            marginLeft: '5%',
            borderRadius: '15px'
        }}>
            <List>
                {render("chat-head")}
                {chats.map((el) => (
                        <ListItem key={el.id}>
                            <NavLink to={`/chats/${el.id}`} style={{textDecoration: 'none',}} activeStyle={{color: 'red', textDecoration: 'none',}}>
                                <ListItemText>
                                    {el.chat}
                                </ListItemText>
                            </NavLink>
                        </ListItem>
                    )
                )   
                }
            </List>
            <form action="#" className="chatlist__form">
                <label htmlFor="name">Enter the name of new friend</label>
                <input type="text" name="friend-name" className="chatlist__input" onChange={handleChange} value={chat} />
                <input type="button" value="Add" className="chatlist__button" onClick={onAddChatFirebase}/>
                <input type="button" value="Remove" className="chatlist__button" onClick={onRemoveChat}/>
            </form>
        </div>
   </>

    );
}
    
  




    
  

export default ListChat