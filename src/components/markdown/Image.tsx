import styled from 'styled-components';
import Image from 'next/image';
import { mediaWidths } from '../../styles/Themes';

const AlignImageCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 60px 0;

  @media (${mediaWidths.mobile}) {
    width: 100vw;
    margin: 32px -16px 32px;
  }
`;

const StyledImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0;

  @media (${mediaWidths.mobile}) {
    height: 200px;
  }
`;

type PostImageProps = {
  alt: string;
  src: string;
};

export const MarkdownImage = ({ alt, src }: PostImageProps) => {
  return (
    <AlignImageCenter>
      <StyledImage>
        <Image alt={alt} src={src} layout={'fill'} objectFit={'contain'} />
      </StyledImage>
    </AlignImageCenter>
  );
};
