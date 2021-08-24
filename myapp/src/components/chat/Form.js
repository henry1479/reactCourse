import { useState,useRef } from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { FormGroup, InputLabel, Input } from '@material-ui/core';







//   styles for components
const useStyles = makeStyles((theme)=> createStyles({
   form: {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: '300px',
      margin: '0 auto',
      
   },
   
   input: {
      padding: '10px 15px',
      outline: 'none',
      borderRadius: '23px',
      borderColor: 'transparent',
      background: theme.palette.primary.main,
   },

   button: {
      color: '#fff',
      background: theme.palette.primary.second,
      border: 'transparent',
      display: 'inline-block',
      padding: '10px 0px',
      borderRadius: '15px',
      width: '30%',
      alignSelf: 'center'
   }
})
)

// принимает функцию из MessageList через пропс
// по оправки сообщений в firebase из инпута
// для сообщений
function Form(props) {
   // object for new message
   const [messageObject, setMessageObject] = useState({});
   // refs for inputs
 
   const inputText = useRef(null);
   //use styles for componenets
   const classes = useStyles();
   const dispatch = useDispatch();
   
   

   //get value of inputs
   // make they propreties of objectMessage
   const handleChange = (event) => {
        let message = {};
        message.author = 'Kostya';
        message.text = inputText.current.value;
        setMessageObject(message)
   }


   // // отправляет сообщения в чат непосредственно
   // // из формы
   // const sendMessage = useCallback(()=>
   //      dispatch(setMessage(messageObject,props.id)),
   //      [dispatch, messageObject]
   // )

   //clean input
   // make fokus on textField
   const cleanField = () => {
      inputText.current.value = '';
      inputText.current?.focus(); 
   };

   // render elements from the framework 'material-ui'

   return (
      <FormGroup action="#" className={classes.form}>
         <InputLabel htmlFor="message">write your message</InputLabel>
         <Input inputRef={inputText} type="text" name="message" onChange ={handleChange} className={classes.input}  disableUnderline={true} autoFocus={true}/>
         <Input type="submit" value="Send" className={classes.button} disableUnderline={true} onClick={(event) => {
             event.preventDefault();
             props.onAddMessage(messageObject);
             cleanField();
            }
        } />
      </FormGroup>
      
   )
}




export default Form;