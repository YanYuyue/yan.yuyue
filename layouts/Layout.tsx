
import { styled } from '@linaria/react';

import { Link } from "./Link";
import { PageContext } from "vike/types";
import { PageContextProvider } from "vike-react/usePageContext";
import { ReactNode, StrictMode } from "react";
import { globalStyles } from './style';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

const Container = styled.div`
  width: 100%;
`;

const PageContainer = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
`;

const PageContent = styled.div`
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;

  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  body.page-is-transitioning & {
    opacity: 0;
  }
`;

export default function LayoutDefault({ children }: { children: ReactNode }) {
  return (
    <Container className={globalStyles}>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

export function LayoutRoot({ children, pageContext }: { children: ReactNode; pageContext: PageContext }) {
  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <LayoutDefault>{children}</LayoutDefault>
      </PageContextProvider>
    </StrictMode>
  );
}


function Content({ children }: { children: ReactNode }) {
  return (
    <PageContainer>
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
}
