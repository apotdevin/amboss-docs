import styled from 'styled-components';
import { AmbossCharacter } from '../src/components/logo/AmbossCharacter';

const S = {
  character: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 60px 0;
  `,
  text: styled.h1`
    width: 100%;
    text-align: center;
  `,
};

const Index = () => {
  return (
    <>
      <S.character>
        <AmbossCharacter />
      </S.character>
      <S.text>Under Construction...</S.text>
    </>
  );
};

export default Index;
