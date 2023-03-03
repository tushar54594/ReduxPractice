import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Inc, Dec} from './states/reducers/index'

function App() {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React Redux</h1>
      <div className='main'>
        <h1>{curState}</h1>
        <div>
          <button onClick={() => dispatch(Inc(10))}>Increment</button>
          <button onClick={() => dispatch(Dec(5))}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
