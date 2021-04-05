import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { constantDimensions, mediaWidths } from '../../styles/Themes';
import { AmbossLogo } from '../logo/AmbossLogo';

const S = {
  wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: ${constantDimensions.headerHeight};
    border-bottom: 1px solid black;

    @media (${mediaWidths.mobile}) {
      padding: 12px;
    }
  `,

  column: styled.div<{ isDocs: boolean }>`
    flex-grow: 100;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    ${({ isDocs }) =>
      isDocs
        ? css`
            margin: 0 12px;
          `
        : css`
            max-width: 900px;
          `}
  `,

  logo: styled.div`
    width: 140px;
    cursor: pointer;

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
  const { pathname } = useRouter();

  const isDocs = pathname.startsWith('/docs');

  return (
    <S.wrapper>
      <S.column isDocs={isDocs}>
        <Link href={'/'}>
          <S.logo>
            <AmbossLogo fill={'url(#grad1)'} size={'100%'}>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={'#7928CA'} stopOpacity="1" />
                <stop offset="100%" stopColor={'#FF0080'} stopOpacity="1" />
              </linearGradient>
            </AmbossLogo>
          </S.logo>
        </Link>
        {!isDocs && (
          <Link href={'/docs'}>
            <S.link>Docs</S.link>
          </Link>
        )}
      </S.column>
    </S.wrapper>
  );
};
