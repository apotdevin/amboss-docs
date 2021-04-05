import styled from 'styled-components';
import { constantDimensions } from '../../styles/Themes';

const S = {
  wrapper: styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${constantDimensions.footerHeight};
    background-color: black;
    color: white;
  `,
  style: styled.div`
    margin: 0 auto;
    max-width: 900px;
    height: 100%;
    padding: 16px;
    text-align: center;
  `,
};

export const Footer = () => {
  return (
    <S.wrapper>
      <S.style>Amboss Technologies</S.style>
    </S.wrapper>
  );
};
