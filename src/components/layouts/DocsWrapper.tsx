import { FC, Fragment, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'react-feather';
import { getOrder } from '../../utils/order';
import sortBy from 'lodash.sortby';
import { mediaWidths } from '../../styles/Themes';

const S = {
  wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
  `,
  body: styled.div`
    width: 100%;

    @media (${mediaWidths.mobile}) {
      padding: 0 16px 0;
    }
  `,
  sidebar: styled.div`
    height: 100%;
    width: 300px;

    @media (${mediaWidths.mobile}) {
      display: none;
    }
  `,
  content: styled.div`
    height: 100%;
    overflow-y: auto;
    padding: 0 16px;
  `,
  row: styled.div`
    margin: 16px 0;
    cursor: pointer;
  `,
  title: styled.div`
    display: flex;
    align-items: center;
  `,
  sub: styled.div`
    padding-left: 32px;
  `,
  link: styled.div<{ open?: boolean }>`
    text-decoration: none;
    color: ${({ open }) => (open ? 'black' : 'grey')};
    transition: 0.2s;

    :hover {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  `,
};

type DocParams = {
  title: string | undefined;
  group: string | undefined;
  filePath: string;
};

const MenuRow: FC<{
  openFile?: string;
  title: string;
  entries: DocParams[];
}> = ({ title, entries, openFile }) => {
  const files = entries.map(e => e.filePath);
  const isOpen = files.includes(openFile || '');

  const [open, setOpen] = useState<boolean>(isOpen);

  return (
    <S.row>
      <S.title onClick={() => setOpen(p => !p)}>
        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        {title}
      </S.title>
      {open &&
        entries.map(e => (
          <S.sub key={e.title}>
            <Link
              as={`/docs/${e.filePath.replace(/\.mdx?$/, '')}`}
              href={`/docs/[slug]`}
            >
              <S.link open={e.filePath === openFile}>{e.title}</S.link>
            </Link>
          </S.sub>
        ))}
    </S.row>
  );
};

type MenuProps = {
  openFile?: string;
  docs: { [key: string]: DocParams[] };
};

export const DocsWrapper: FC<MenuProps> = ({ children, docs, openFile }) => {
  const groups = Object.keys(docs);

  const mapped = groups.map(g => ({
    group: g,
    order: getOrder(g),
    entries: docs[g],
  }));

  const sorted = sortBy(mapped, 'order');

  return (
    <S.wrapper>
      <S.sidebar>
        <S.content>
          {sorted.map(g => (
            <Fragment key={g.group}>
              <MenuRow
                openFile={openFile}
                title={g.group}
                entries={g.entries}
              />
            </Fragment>
          ))}
        </S.content>
      </S.sidebar>
      <S.body>{children}</S.body>
    </S.wrapper>
  );
};
