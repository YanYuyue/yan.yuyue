import { styled } from '@linaria/react'

export const Container = styled.div`
  position: relative;
  & > .cv-dl {
    position: absolute;
    top: 0;
    right: 0;
    color: gray;
  }
`;