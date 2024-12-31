import { styled } from "@linaria/react"
import { mediaQueryLessOrEqual } from "../../utils/style"

import topics from './_topics.md?img'
import MarkdownRenderer from "../../utils/MarkdownRenderer"
import { css } from "@linaria/core"


export const TopicBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  border: 1px solid var(--gray-5);
  border-radius: 20px;

  padding: 0.8em;
  gap: 1em;

  &:not(:first-child) {
    margin-top: 1.2em;
  }

  &:nth-child(2n+0) {
    flex-direction: row-reverse;

    ${mediaQueryLessOrEqual('sm')} {
      flex-direction: column;
    }
  }
  
  ${mediaQueryLessOrEqual('sm')} {
    flex-direction: column;
  }
`

export const TopicImage = styled.img`
  object-fit: cover;

  width: 360px;
  max-height: 480px;

  border-radius: 12px;

  ${mediaQueryLessOrEqual('sm')} {
    max-height: 360px;
    width: 100%;
  }
`

export const Topics = () => {
  return <>
    {topics.map(([img, content], index) => <TopicBox key={index}>
      <TopicImage src={img} />
      <MarkdownRenderer children={content} className={css`
        width: 100%;
        & > h1:first-child {
          margin-top: 0;
        }
      `} />
    </TopicBox>)}
  </>
}