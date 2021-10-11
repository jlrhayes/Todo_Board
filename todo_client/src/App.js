import Board from './components/Board';
import {useState} from 'react'
import './App.css';

function App() {

  //need to move this into board dashboard
  const [columns, setColumns] = useState([
    {
      id : 1,
      name : "Todo",
    },
    {
      id : 2,
      name : 'In progress',
    }
  ])


  return (
    <div className="App">
      <Board columns = {columns}></Board>
    </div>
  );
}

export default App;
