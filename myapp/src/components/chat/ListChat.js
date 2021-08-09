import { useSelector, useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import { List,ListItem,ListItemText} from '@material-ui/core';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import MessageList from './MessageList';
import { addName } from '../store/actions/addChat';
import { getChatList } from '../store/selectors/chatSelector'
import { removeName } from '../store/actions/removeChat';


//реализует список чатов

function ListChat ( {render} ) {
    const { chats } = useSelector(getChatList);

    

    const [ chat, setChat ]= useState('');
    const dispatch = useDispatch();

    const handleChange = useCallback((event)=>{  
        let value = event.target.value;
        setChat(value);
    },[]);

    const addNewChat = useCallback(()=>
        dispatch(addName(chat)),
        [dispatch, chat]
    );

    const removeChat = useCallback(()=> {
        let chatId = window.location.pathname.substring(11,7);
        dispatch(removeName(chatId));
    },
    [dispatch, chat]
);
        
   

    
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
            <form action="#" className="chatlist__form">
                <label htmlFor="name">Enter the name of new friend</label>
                <input type="text" name="friend-name" className="chatlist__input" onChange={handleChange} />
                <input type="button" value="Add" className="chatlist__button" onClick={addNewChat} />
                <input type="button" value="Remove" className="chatlist__button" onClick={removeChat}/>
            </form>
        </div>
        <Route path="/chats/:Id" >
            <MessageList />
        </Route>
   </>

    );
}
    
  




    
  

export default ListChat