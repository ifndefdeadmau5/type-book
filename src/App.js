import React, { useState } from 'react';
import './App.css';
import TopMenu from './components/topMenu';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress'; // progress bar

const words = ['Apple', 'Banana', 'Carrot', 'Grape'];
function App({ count, increment, decrement }) {
  console.log('count');
  console.log(count);
  const [userInput, setUserInput] = useState('type here');
  const [index, setIndex] = useState(0);

  const sampleText = 'type this';

  return (
    <div className="App">
      <TopMenu />
      <LinearProgress
        value={(index / words.length) * 100}
        variant="determinate"
      />
      <BookText text={words[index]} />
      <form>
        <input
          type="text"
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
        />
        <button
          onClick={e => {
            e.preventDefault();
            setUserInput('');
            setIndex(prev => prev + 1);
          }}
        >
          Submit
        </button>
      </form>
      {userInput === sampleText && <p>정확히 입력하셨습니다.</p>}
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
}

// JSX
const BookText = props => <p>{props.text}</p>;

export default connect(
  state => ({
    count: state,
  }),
  dispatch => {
    console.log('say what');
    return {
      increment: () =>
        dispatch({
          type: 'INCREMENT',
        }),
      decrement: () =>
        dispatch({
          type: 'DECREMENT',
        }),
    };
  },
)(App);
