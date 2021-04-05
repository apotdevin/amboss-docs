import styled from 'styled-components';
import Layout from '../components/Layout';
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
    <Layout>
      <S.character>
        <AmbossCharacter />
      </S.character>
    </Layout>
  );
};

export default Index;
