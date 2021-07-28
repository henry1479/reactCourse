import faker from 'faker';
import { List,ListItem,ListItemText} from '@material-ui/core';
import { NavLink} from 'react-router-dom'

//realize list of chats 


const ListChat = ({ chats, render }, props) => (
        <List display="flex">
            {render("chat-head")}
            { Object.keys(chats).map((id, i) => (
                    <ListItem key={i}>
                        <NavLink to={`/chats/${id}`}>
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