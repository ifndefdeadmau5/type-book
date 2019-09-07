import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 20px;
  width: 500px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px !important;
`;

export default () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [login, { loading, data }] = useLazyQuery(
    gql`
      query Login($id: String, $password: String) {
        login(id: $id, password: $password)
      }
    `,
    { fetchPolicy: 'network-only' },
  );

  console.log('data');
  console.log(data);

  if(data && data.login) {
      localStorage.setItem('token', data.login);
      window.location.reload();
  }

  return (
    <StyledPaper>
      <TextField
        label="아이디"
        margin="normal"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <TextField
        type="password"
        label="비밀번호"
        margin="normal"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <StyledButton
        variant="contained"
        onClick={() => {
          console.log(id, ':', password);
          login({ variables: { id, password } });
        }}
      >
        로그인
      </StyledButton>
    </StyledPaper>
  );
};
