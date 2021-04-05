import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import CustomLink from '../../components/CustomLink';
import Layout from '../../components/Layout';
import { docFilePaths, DOCS_PATH } from '../../src/utils/mdxUtils';
import groupBy from 'lodash.groupby';
import { DocsWrapper } from '../../src/components/layouts/DocsWrapper';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  Head,
};

const PostPage = ({ source, frontMatter, docs, openFile }: any) => {
  const grouped = groupBy(docs, 'group');
  const content = hydrate(source, { components });

  return (
    <DocsWrapper openFile={openFile} docs={grouped}>
      <Layout>
        <header>
          <nav>
            <Link href="/">
              <a>👈 Go back home</a>
            </Link>
          </nav>
        </header>
        <div className="post-header">
          <h1>{frontMatter.title}</h1>
          {frontMatter.description && (
            <p className="description">{frontMatter.description}</p>
          )}
        </div>
        <main>{content}</main>

        <style jsx>{`
          .post-header h1 {
            margin-bottom: 0;
          }

          .post-header {
            margin-bottom: 2rem;
          }
          .description {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    </DocsWrapper>
  );
};

export default PostPage;

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
      frontMatter: data,
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
