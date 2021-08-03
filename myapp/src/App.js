
import './App.css';
import Message from './Message.js'


function App() {
  const myName = 'Kostya';
  const myLastName = 'Tsypa';
  return (
    <div className="App">
      <header className="App-header">
        <Message lastName={myLastName} />
      </header>
    </div>
  );
}

export default App;
