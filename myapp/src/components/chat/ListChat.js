
import { List,ListItem,ListItemText} from '@material-ui/core';
import { NavLink} from 'react-router-dom'

//реализует список чатов

const ListChat = ({ chats, render}) => (
        <List style={{float:'left',width:'15%'}}>
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

);

    
  

export default ListChat