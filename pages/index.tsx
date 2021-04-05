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
};

const Index = () => {
  return (
    <S.character>
      <AmbossCharacter />
    </S.character>
  );
};

export default Index;
