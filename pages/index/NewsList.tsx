import MarkdownRenderer from "../../utils/MarkdownRenderer";
import { DateTime } from 'luxon';
import { css } from "@linaria/core";

import { MarkedMarkdownItem, splitByMarkers, SplitByMarkersReturn } from '../../utils/markdown-split';
import newsListRaw from './_news_list.md';

// Match date formats: YYYY-MM-DD, YYYY/MM/DD
const datePattern = /^#\s*date\s*:\s*((\d{4}\s*[-/]\s*\d{1,2}\s*[-/]\s*\d{1,2}))\s*$/;

function parseDate(input: string) {
  input = (input || '').replace(/\s+/g, '');
  const [y, m, d] = input.split(/[-/]/g, 3);
  return {
    year: Number.isNaN(y) ? 1 : Number(y),
    month: Number.isNaN(m) ? 1 : Number(m), // 1-based
    day: Number.isNaN(d) ? 1 : Number(d),
  };
}

export type DateType = ReturnType<typeof parseDate>;

export type NewsItem = MarkedMarkdownItem<DateType>;

export type NewsType = SplitByMarkersReturn<DateType>;

const newsList = splitByMarkers(newsListRaw, datePattern, parseDate);

export const NewsCard = (props: {
  date: DateType,
  content: string,
}) => {
  const dateObject = DateTime.fromObject(props.date);
  const dateStr = dateObject.toFormat('ccc, LLL d, yyyy');
  return <div>
    <div className={css`
      color: var(--blue-3);
      font-size: lg;
      font-weight: bold;
      padding-top: 1.5em;
      padding-bottom: 0.5em;
    `}>{dateStr}</div>
    <div className={css`
      padding-left: 0.8em;
      p {
        margin: 0.5em 0;
      }
      h1, h2, h3, h4, h5, h6 {
        margin: 0;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
    `}>
      <MarkdownRenderer>{props.content}</MarkdownRenderer>
    </div>
  </div>
}

export const NewsList = (props: {

}) => {
  return <>
    {newsList.sections.map(([d, c], i) => <NewsCard date={d} content={c} key={i}/>)}
  </>
}

export default NewsList