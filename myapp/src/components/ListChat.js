import faker from 'faker';
import { List,ListItem,ListItemText} from '@material-ui/core';

//realize list of chats 


function ListChat (props) {
    // create the array with 10 objects
    // with properties: id and name
    const listChat = Array.from({length:10}).map(()=>({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
    }))

    // render in element List
    // 10 ListItem using properties 
    // of objects in the array
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