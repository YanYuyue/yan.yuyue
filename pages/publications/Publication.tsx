import { styled } from '@linaria/react';
import React from 'react';
import { parseAuthor } from './author';
import { Entry } from 'bibtex-js-parser';
import { css, cx } from '@linaria/core';
import { IoIosCopy } from "react-icons/io";

// 类型定义
type Author = {
  first: string;
  middle: string[];
  last: string;
};

interface PublicationProps {
  entry: Entry & { errors?: string[] };
}

// 样式组件
const PublicationWrapper = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
`;

const DOILink = styled.a`
  color: #3498db;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const AuthorListWrapper = styled.div`
  color: #34495e;
  margin-bottom: 0.5rem;
  font-style: italic;

  & > .author:nth-child(1n+2)::before {
    content: ', ';
  }

  & > .author.highlight {
    font-weight: bold;
  }
`;

const ErrorCard = (props: { errors?: string[], raw: string }) => {
  const { errors, raw } = props;
  if (!errors?.length) {
    return;
  }
  return <div className={css`
    color: red;
  `}>
    <pre><code>{raw}</code></pre>
    Errors occurred while parsing the citation:
    {errors.map((e, i) => <div key={i}>{e}</div>)}
  </div>
}


// 格式化作者列表

const isYan = (author: Author) => !!(author && author.first?.toLowerCase() === 'yuyue' && author.last?.toLowerCase() === 'yan');

const formatAuthors = (authors: Author[]) => {
  return authors.map((author, index) => {
    const fullName = `${author.first} ${author.middle.join(' ')} ${author.last}`.trim();
    return index === authors.length - 1 ? fullName : `${fullName}, `;
  });
};

const formatAuthor = (author: Author) => {
  const fullName = `${author.first} ${author.middle.join(' ')} ${author.last}`.trim();
  return fullName;
};

const AuthorList = (props: { authors: Author[] }) => {
  const { authors } = props;
  return <AuthorListWrapper>
    {authors.map((author, index) => author && <span
      key={index} className={cx('author', isYan(author) && 'highlight')}
    >{formatAuthor(author)}</span>)}
  </AuthorListWrapper>
};


const MetaInfo = styled.div`
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.4;

  position: relative;

  & > .info:nth-child(1n+2)::before {
    content: ', ';
  }

  & > .cite-copy {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const Publication = ({ entry }: PublicationProps) => {
  // 解析作者字符串
  const authors = parseAuthor(entry.author ?? '');

  if (authors.findIndex(isYan) === -1) {
    return;
  }

  // 构建引用信息
  const getVenue = () => {
    if (entry.journal) return entry.journal;
    if (entry.booktitle) return entry.booktitle;
    return '';
  };

  const getVolInfo = () => {
    const parts = [];
    if (entry.volume) parts.push(`vol. ${entry.volume}`);
    if (entry.number) parts.push(`no. ${entry.number}`);
    if (entry.pages) parts.push(`pp. ${entry.pages}`);
    return parts.length > 0 ? `(${parts.join(', ')})` : '';
  };

  return (
    <PublicationWrapper>
      <Title>{entry.title}</Title>
      <AuthorList authors={authors} />
      <MetaInfo>
        <span className='info'>{getVenue()}</span>
        <span className='info'>{getVolInfo()}</span>
        {entry.publisher && <>
          <span className='info'>{entry.publisher}</span>
          <span className='info'>{entry.year || '<Unknown Year>'}</span>
        </>}
        {entry.doi && (
          <span className='info'>
            {' · '}
            <DOILink href={`https://doi.org/${entry.doi}`} target="_blank" rel="noopener noreferrer">
              DOI: {entry.doi}
            </DOILink>
          </span>
        )}
        <div className='cite-copy clickable-icon' onClick={() => navigator.clipboard.writeText(entry.raw)}>
          <IoIosCopy />
        </div>
      </MetaInfo>
      <ErrorCard errors={entry.errors} raw={entry.raw} />
    </PublicationWrapper>
  );
};