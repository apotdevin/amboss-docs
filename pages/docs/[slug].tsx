import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import path from 'path';
import CustomLink from '../../components/CustomLink';
import { docFilePaths, DOCS_PATH } from '../../src/utils/mdxUtils';
import groupBy from 'lodash.groupby';
import { DocsWrapper } from '../../src/components/layouts/DocsWrapper';
import styled from 'styled-components';
import { CodeBlock, InlineCode } from '../../src/components/markdown/CodeBlock';
import { MarkdownImage } from '../../src/components/markdown/Image';

const S = {
  wrapper: styled.div`
    margin: 0 auto;
    max-width: 900px;
    padding: 16px 0 40px;
  `,
};

const components = {
  a: CustomLink,
  Head,
  code: CodeBlock,
  img: MarkdownImage,
  inlineCode: InlineCode,
};

const DocPage = ({ source, docs, openFile }: any) => {
  const grouped = groupBy(docs, 'group');
  const content = hydrate(source, { components });

  return (
    <DocsWrapper openFile={openFile} docs={grouped}>
      <S.wrapper>{content}</S.wrapper>
    </DocsWrapper>
  );
};

export default DocPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const docs = docFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(DOCS_PATH, filePath));
    const { data } = matter(source);

    return {
      ...data,
      filePath,
    };
  });

  const docsFilePath = path.join(DOCS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(docsFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      docs,
      openFile: `${params?.slug}.mdx`,
      source: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = docFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
