import './App.css';
import Hello from './components/Hello/Hello';
import Welcome from './components/Welcome/Welcome';
import ToDoList from './components/ToDoList/ToDoList';
import SendRequest from './components/SendRequest/SendRequest';
import SendRequest2 from './components/SendRequest2/SendRequest2';

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Welcome></Welcome>
      <div className='todoListBox'>
        <ToDoList></ToDoList>
      </div>
      <SendRequest></SendRequest>
      <SendRequest2></SendRequest2>
    </div>
  );
}

export default App;
