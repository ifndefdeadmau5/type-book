import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';
import TopMenu from './components/topMenu';
import LinearProgress from '@material-ui/core/LinearProgress';

function App({ count, increment, decrement }) {
  const [userInput, setUserInput] = useState('');
  const [index, setIndex] = useState(0);
  const { loading, error, data } = useQuery(gql`
    {
      verses {
        text
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const words = data.verses.map(v => v.text);
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
      {userInput === words[index] && <p>정확히 입력하셨습니다.</p>}
    </div>
  );
}

// JSX
const BookText = props => <p>{props.text}</p>;

export default App;
