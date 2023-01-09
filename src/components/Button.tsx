import styled from '@emotion/styled';
import React from 'react';

const Button = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => {
  return (
    <Wrapper active={active} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ active: boolean }>`
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.active ? '#FE8C46' : '#DFDFDF')};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? 'white' : '#7B7B7B')};
`;

export default Button;
