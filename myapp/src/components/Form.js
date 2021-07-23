import { useState, useRef } from 'react'
import { makeStyles,createStyles } from '@material-ui/core/styles';
import { FormGroup, InputLabel, Input } from '@material-ui/core'



// component realize the form for sending message 
// contain 2 inputs and button with handler of events


  

const useStyles = makeStyles((theme)=> createStyles({
   form: {
      width: '60%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: '300px',
      
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
      background: '#109fc5',
      border: 'transparent',
      display: 'inline-block',
      padding: '10px 0px',
      borderRadius: '15px',
      width: '30%',
      alignSelf: 'center'
   }
})
)

// 
// 
function Form(props) {
   // object for new message
   const [messageObject, setMessageObject] = useState({});
   const inputAuthor = useRef(null);
   const inputText = useRef(null);
   const classes = useStyles();
   
   

   //get value of inputs
   // make they propreties of objectMessage
   const handleChange = (event) => {

      let object = messageObject;
      const target = event.target;
      const name = target.name;
      const value = target.value;

      if (name === 'author') {
         if (value === '') {
            object.author = ''
         } else {
            object.author = value;
         }
            
      } else {
         object.text = value;
      }

      setMessageObject(object);
   }

   //clean inputs
   const cleanField = () => {
      inputAuthor.current.value = '';
      inputText.current.value = '';
      inputText.current?.focus();
   }

   

   return (
      <FormGroup action="#" className={classes.form}>
         <InputLabel htmlFor="author">enter your name</InputLabel>
         <Input inputRef={inputAuthor} type="text" variant="outlined" name="author" onChange={handleChange} className={classes.input}  disableUnderline={true}/>
         <InputLabel htmlFor="message">write your message</InputLabel>
         <Input inputRef={inputText} type="text" name="message" onChange={handleChange} className={classes.input}  disableUnderline={true} autoFocus={true}/>
         <Input type="submit" value="Send" className={classes.button} disableUnderline={true} onClick={(event) => { event.preventDefault(); props.handleChange(messageObject); cleanField();}} />
      </FormGroup>
   )
}




export default Form;