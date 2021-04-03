import Link from 'next/link';
import styled from 'styled-components';
import { AmbossLogo } from '../logo/AmbossLogo';

const S = {
  wrapper: styled.div`
    width: 100%;
    padding: 12px 0;
  `,
  column: styled.div`
    margin: 0 auto;
    width: 900px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  logo: styled.div`
    width: 140px;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  link: styled.div`
    text-decoration: none;
    color: grey;
    transition: 0.2s;

    :hover {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  `,
};

export const Header = () => {
  return (
    <S.wrapper>
      <S.column>
        <S.logo>
          <AmbossLogo fill={'url(#grad1)'} size={'100%'}>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={'#7928CA'} stopOpacity="1" />
              <stop offset="100%" stopColor={'#FF0080'} stopOpacity="1" />
            </linearGradient>
          </AmbossLogo>
        </S.logo>
        <Link href={'/docs'}>
          <S.link>Docs</S.link>
        </Link>
      </S.column>
    </S.wrapper>
  );
};
