import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './components/topMenu';
import LinearDeterminate from './components/progress';  // progress bar
import LinearProgress from '@material-ui/core/LinearProgress';  // progress bar

const words = [
'Apple',
'Banana',
'Carrot',
'Grape',
];
function App() {
  const [userInput, setUserInput] = useState('type here');
  const [index, setIndex] = useState(0);
  
  const sampleText = 'type this';
  const progressValue = 30;

  return (
    <div className="App">
      <TopMenu />
      <LinearProgress value={index/words.length * 100} variant="determinate" /> 
      <BookText text={words[index]} />
      <form>
        <input 
          type="text" 
          value={userInput} 
          onChange={event => setUserInput(event.target.value)}
        />
        <button onClick={e => {
          e.preventDefault();
          setUserInput('');
          setIndex(prev => prev + 1)
        }}>
          Submit
        </button>
      </form>
      {userInput === sampleText && <p>정확히 입력하셨습니다.</p>}
    </div>
  );
}

// JSX
const BookText = (props) => <p>{props.text}</p>

export default App;

