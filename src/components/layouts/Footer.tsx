import styled from 'styled-components';

const S = {
  wrapper: styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 120px;
    background-color: black;
    color: white;
  `,
  style: styled.div`
    margin: 0 auto;
    width: 900px;
    height: 100%;
    padding: 16px;
    text-align: center;
  `,
};

export const Footer = () => {
  return (
    <S.wrapper>
      <S.style>Amboss</S.style>
    </S.wrapper>
  );
};
