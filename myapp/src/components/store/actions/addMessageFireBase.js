import { db } from '../../../index.js'


export const CHANGE_MESSAGES ='CHANGE_MESSAGES';


const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];
  
    snapshot.forEach((mes) => {
      messages.push({id: mes.key, ...mes.val()});
    });
  
    return messages;
  }
  
  export const addMessageWithFirebase = (chatId, message) => async () => {
    db().ref("chats").child(chatId).child('messages').push(message);
  };
  
  export const initMessageTracking = (chatId) => (dispatch) => {
    db().ref("chats").child(chatId).on("child_changed", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_MESSAGES,
        payload,
      });
    });
  
    db().ref("chats").child(chatId).on("child_added", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_MESSAGES,
        payload,
      });
    });
  };