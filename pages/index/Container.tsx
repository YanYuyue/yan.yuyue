import { styled } from "@linaria/react";
import { mediaQueryMaxWidth } from "../../utils/style";


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  ${mediaQueryMaxWidth('md')} {
    & {
      flex-direction: column;
    }
  }
`;