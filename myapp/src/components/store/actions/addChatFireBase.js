import { db } from '../../../index.js'


export const CHANGE_CHATS ='CHANGE_CHATS';


const getPayloadFromSnapshot = (snapshot) => {
    const chats = [];
    snapshot.forEach(entry => {
    chats.push({id: entry.key, ...entry.val()})
    console.log(chats)
    });

   
   
    return chats;
  }
  
  export const addChatWithFirebase = (chat) => async () => {
    db().ref('chats').push(chat);
   
    
  };
  
  export const initChatTracking = () => (dispatch) => {
    db().ref("chats").on("child_changed", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_CHATS,
        payload,
      });
    });
  
    db().ref("chats").on("value", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_CHATS,
        payload,
      });
    });
  
    db().ref("chats").on("child_added", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_CHATS,
        payload,
      });
    });
  };