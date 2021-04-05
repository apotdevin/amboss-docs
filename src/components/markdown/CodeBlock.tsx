import * as React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

type CodeBlockProps = {
  children: string;
  className?: string;
};

export const InlineCode = styled.code`
  background-color: rgb(219, 219, 219);
  color: black;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  return (
    <Prism
      style={okaidia}
      language={className?.replace('language-', '')}
      showLineNumbers={false}
      children={children}
    />
  );
};
