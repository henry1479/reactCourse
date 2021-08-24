import { List,ListItem,ListItemText} from '@material-ui/core';
import { NavLink } from 'react-router-dom';


export const chatsBlockTests = {
    chatName: 'chatBlock-name',
    loginField: 'chatBlock-loginField'
}

export const Chats = ( props) => {
    return (
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
                <h3>Chat List</h3>
                {props.chats?.map((el) => (
                    <ListItem key={el.id} >
                        <NavLink to={`/chats/${el.id}`} style={{textDecoration: 'none',}} activeStyle={{color: 'red', textDecoration: 'none',}}>
                            <ListItemText data-testid ={chatsBlockTests.chatName} >
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
                <input type="text" name="friend-name" className="chatlist__input" onChange={props.handleChange} value={props.chat} data-testid={chatsBlockTests.loginField}/>
                <input type="button" value="Add" className="chatlist__button" onClick={props.onAddChatFirebase}/>
                <input type="button" value="Remove" className="chatlist__button" onClick={props.onRemoveChat}/>
            </form>
        </div>
    )
}