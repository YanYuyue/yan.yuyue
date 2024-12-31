import { styled } from '@linaria/react'
import MarkdownRenderer from "../../utils/MarkdownRenderer"
import { useState } from 'react'

export const ContainerWrapper = styled.div`

`;

export const Container = (props: { article: string }) => {
  return <ContainerWrapper>
    <MarkdownRenderer>{props.article}</MarkdownRenderer>
  </ContainerWrapper>
}