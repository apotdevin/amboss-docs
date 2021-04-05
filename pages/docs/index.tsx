import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { DocsWrapper } from '../../src/components/layouts/DocsWrapper';
import { docFilePaths, DOCS_PATH } from '../../src/utils/mdxUtils';
import groupBy from 'lodash.groupby';
import BeatLoader from 'react-spinners/BeatLoader';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type DocParams = {
  title: string | undefined;
  group: string | undefined;
  filePath: string;
};

const S = {
  wrapper: styled.div`
    width: 100%;
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

const DocsView = ({ docs }: { docs: DocParams[] }) => {
  const grouped = groupBy(docs, 'group');

  const { push } = useRouter();

  useEffect(() => {
    push('/docs/intro');
  }, []);

  return (
    <DocsWrapper docs={grouped}>
      <S.wrapper>
        <BeatLoader color={'orange'} />
      </S.wrapper>
    </DocsWrapper>
  );
};

export default DocsView;

export function getStaticProps() {
  const docs = docFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(DOCS_PATH, filePath));
    const { data } = matter(source);

    return {
      ...data,
      filePath,
    };
  });

  return { props: { docs } };
}
