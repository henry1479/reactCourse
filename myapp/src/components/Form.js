import { useState, useRef} from 'react'
// component realize the form for sending message 
// contain 2 inputs and button with handler of events
// 
// 
function Form(props) {
   // object for new message
   const[messageObject, setMessageObject] = useState({});
   const inputAuthor = useRef(null);
   const inputText = useRef(null);

   //get value of inputs
   // make they propreties of objectMessage
   const handleChange = (event) => {
      
      let object = messageObject;
      const target = event.target;
      const name = target.name;
      const value = target.value;

      if (name === 'author') {
         object.author = value;
      } else {
         object.text = value;
      }

      setMessageObject(object);
   }

   //clean inputs
   const cleanField = () => {
      inputAuthor.current.value='';
      inputText.current.value='';
   }

  return (
     <form action="#" className="message-form" onSubmit={(event) => {event.preventDefault(); props.handleChange(messageObject);cleanField()}}>
         <label htmlFor="author">enter your name</label>
         <input ref={inputAuthor}type="text" name="author"  className="message-form__author-text" onChange={handleChange} />
         <label htmlFor="message">write your message</label>
         <input ref={inputText} type="text" name="message"  className="message-form__message-text" onChange={handleChange} />
         <input type="submit" className="message-form__btn" value="Send"/>
     </form>
  )
}


export default Form