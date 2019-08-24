import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './components/topMenu';
import LinearDeterminate from './components/progress';  // progress bar

function App() {
  const [userInput, setUserInput] = useState('type here');
  
  const sampleText = 'type this';
  const progressValue = 30;

  return (
    <div className="App">
      <TopMenu />

      <BookText text={sampleText} />
      <input 
        type="text" 
        value={userInput} 
        onChange={event => setUserInput(event.target.value)}
      />
      {userInput === sampleText && <p>정확히 입력하셨습니다.</p>}

      <LinearDeterminate value={progressValue} phone='01010'/> 
    </div>
  );
}

// JSX
const BookText = (props) => <p>{props.text}</p>

export default App;

