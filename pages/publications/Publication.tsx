import { styled } from '@linaria/react';
import React from 'react';
import { parseAuthor } from './author';
import { Entry } from 'bibtex-js-parser';

// 类型定义
type Author = {
  first: string;
  middle: string[];
  last: string;
};

interface PublicationProps {
  entry: Entry;
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

const Authors = styled.div`
  color: #34495e;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const MetaInfo = styled.div`
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const DOILink = styled.a`
  color: #3498db;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// 格式化作者列表
const formatAuthors = (authors: Author[]) => {
  return authors.map((author, index) => {
    const fullName = `${author.first} ${author.middle.join(' ')} ${author.last}`.trim();
    return index === authors.length - 1 ? fullName : `${fullName}, `;
  });
};

// Publication组件
export const Publication: React.FC<PublicationProps> = ({ entry }) => {
  // 解析作者字符串
  const authors = parseAuthor(entry.author ?? '');
  
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
      <Authors>{formatAuthors(authors)}</Authors>
      <MetaInfo>
        {getVenue()}
        {' '}
        {getVolInfo()}
        {entry.publisher && `, ${entry.publisher}`}
        {', '}
        {entry.year}
        {entry.doi && (
          <>
            {' · '}
            <DOILink href={`https://doi.org/${entry.doi}`} target="_blank" rel="noopener noreferrer">
              DOI: {entry.doi}
            </DOILink>
          </>
        )}
      </MetaInfo>
    </PublicationWrapper>
  );
};