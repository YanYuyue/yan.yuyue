
import { styled } from '@linaria/react';

import { Link } from "./Link";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from './theme';

const FooterContainer = styled.div`
  border-top: 1px solid var(--gray-5);
  width: 100%;
`;

const FooterWrapper = styled.div`
  padding: 8px;
  max-width: var(--layout-max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: small;
`;


export function Footer() {
  return <FooterContainer>
    <FooterWrapper>
      © 2024 Yan Yuyue. Powered by
      React, Vite, Vike & Linaria.
    </FooterWrapper>
  </FooterContainer>;
}