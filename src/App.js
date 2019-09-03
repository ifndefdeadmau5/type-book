import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import './App.css';
import TopMenu from './components/topMenu';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SLIDE_HEIGHT = 300;
const TextSlide = styled.div`
  height: ${SLIDE_HEIGHT}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styles = {
  slideContainer: {
    height: SLIDE_HEIGHT,
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
};

function App({ count, increment, decrement }) {
  const [userInput, setUserInput] = useState('');
  const [index, setIndex] = useState(0);
  const [getVerses, { loading, data }] = useLazyQuery(gql`
    {
      verses {
        text
      }
    }
  `);

  useEffect(() => {
    getVerses();
  }, [])

  if (loading) return <p>Loading...</p>;

  const words = data ? data.verses.map(v => v.text) : [];
  return (
    <div className="App">
      <TopMenu />
      <LinearProgress
        value={(index / words.length) * 100}
        variant="determinate"
      />
      <SwipeableViews
        containerStyle={styles.slideContainer}
        axis="y"
        enableMouseEvents
        index={index}
      >
        {words.map(text => (
          <div>
            <BookText text={text} />
          </div>
        ))}
      </SwipeableViews>
      <Form>
        <TextField
          type="text"
          value={userInput}
          placeholder="Type here"
          onChange={event => setUserInput(event.target.value)}
          margin="normal"
        />
        <Button
          style={{ display: 'none' }}
          type="submit"
          variant="outlined"
          onClick={e => {
            e.preventDefault();
            setUserInput('');
            if (userInput !== words[index]) return;
            setIndex(prev => prev + 1);
          }}
        >
          전송
        </Button>
      </Form>
      {userInput === words[index] && <p>정확히 입력하셨습니다.</p>}
    </div>
  );
}

// JSX
const BookText = props => (
  <TextSlide>
    <p>{props.text}</p>
  </TextSlide>
);

export default App;
