import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('type here');
  const sampleText = 'hahaha type this';

  return (
    <div className="App">
      <BookText text={sampleText}></BookText>
      <input 
        type="text" 
        value={userInput} 
        onChange={event => setUserInput(event.target.value)}
      />
      {userInput === sampleText && <p>정확히 입력하셨습니다.</p>}
    </div>
  );
}

// JSX
const BookText = (props) => <p>{props.text}</p>

export default App;

