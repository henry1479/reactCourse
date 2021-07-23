import faker from 'faker';
import { List,ListItem,ListItemText} from '@material-ui/core';


function ListChat (props) {

    const listChat = Array.from({length:10}).map(()=>({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
    }))

    console.log(listChat);
    return (
        
        <List display="flex">
            <h3>Chat List</h3>
            {
                listChat.map((item)=> {return <ListItem key={item.id}>
                    <ListItemText>{item.name}</ListItemText>
                </ListItem>})
            }
        </List>

    );

    

}    

export default ListChat