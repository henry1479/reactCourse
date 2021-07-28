import './App.css';
// paragraph with a text of a message
// name changes depending of props.name or props.lastName
// CSS changes depending of contsisting of props.name 
// adding the classes - 'message' or 'message-red'
function Message(props) {
  return (
    <p className={`${props.name ? 'message' : 'message-red'}`}>{props.name ? props.name : props.lastName} begin to learn React!</p>
  )
}


export default Message