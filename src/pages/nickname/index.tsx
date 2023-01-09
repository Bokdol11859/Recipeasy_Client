import styled from '@emotion/styled';
import Button from '@src/components/Button';
import { DeleteIcon } from '@src/components/icons/SystemIcons';
import COLOR from '@src/constants/theme';
import React, { ChangeEvent, useState } from 'react';

const Nickname = () => {
  const [name, setName] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Container>
      <Main>
        <Heading>닉네임을 정해주세요</Heading>
        <InputWrapper>
          <InputBox
            placeholder="닉네임을 입력해주세요!"
            value={name}
            onChange={handleChange}
            active={name.length !== 0}
          />
          {name.length !== 0 && (
            <InputBoxButton>
              <DeleteIcon
                onClick={() => {
                  setName('');
                }}
              />
            </InputBoxButton>
          )}
        </InputWrapper>
      </Main>
      <Footer>
        <Button active={name.length !== 0} onClick={() => {}}>
          test
        </Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 33%;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputBox = styled.input<{ active: boolean }>`
  width: calc(100% - 2rem);
  height: 2.5rem;
  padding: 0 1rem;
  border: none;
  background-color: #f3f2f2;
  border-radius: 0.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  color: #b3b3b3;

  &:focus {
    color: ${COLOR.BLACK};
    border: none;
  }
`;

const InputBoxButton = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-45%);
`;

const Footer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Nickname;
