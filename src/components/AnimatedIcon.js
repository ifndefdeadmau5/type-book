import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  & > span:nth-child(1),
  & > span:nth-child(3) {
    ${props => (props.active ? 'width: 40px' : '')}
    ${props => (props.active ? 'width: 40px' : '')}
  }

  & > span:nth-child(1) {
    ${props =>
      props.active
        ? `
  transform: translateX(-10px) rotate(-45deg);`
        : ''}
  }

  & > span:nth-child(3) {
    ${props =>
      props.active
        ? `  
  transform: translateX(-10px) rotate(45deg);`
        : ''}
  }
`;
const Line = styled.span`
  width: 50px;
  height: 5px;
  background-color: #ecf0f1;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
`;

export default () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <Menu active={active} onClick={() => setActive(prev => !prev)}>
      <Line active={active} />
      <Line active={active} />
      <Line active={active} />
    </Menu>
  );
};
