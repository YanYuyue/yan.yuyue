import ReactMarkdown from "react-markdown";
import newsList, { DateType } from "./news-list"
import { DateTime } from 'luxon';
import { css } from "@linaria/core";


export const NewsCard = (props: {
  date: DateType,
  content: string,
}) => {
  const dateObject = DateTime.fromObject(props.date);
  const dateStr = dateObject.toFormat('ccc, LLL d, yyyy');
  return <div>
    <div className={css`
      color: var(--blue-2);
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
      <ReactMarkdown>{props.content}</ReactMarkdown>
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