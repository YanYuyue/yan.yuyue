import "./style.css";
import { styled } from '@linaria/react';
import React from "react";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";
import { PageContext } from "vike/types";
import { PageContextProvider } from "vike-react/usePageContext";

const Container = styled.div`
  /* display: flex; */
  max-width: 900px;
  margin: auto;
`;

const NavBarWrapper = styled.div`
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 1.8em;
  border-bottom: 2px solid #eee;

  & > .container {
    display: flex;
    gap: 10px;
  }
`;

const PageContainer = styled.div`
  /* id: page-container; */
`;

const PageContent = styled.div`
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;
`;

const LogoWrapper = styled.div`
`;

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <NavBar />
      <Content>{children}</Content>
    </Container>
  );
}

export function LayoutRoot({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <LayoutDefault>{children}</LayoutDefault>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function NavBar() {
  return <NavBarWrapper>
    <div className='container'>
      <Logo />
    </div>

    <div className='container'>
      <Link href="/">Welcome</Link>
      <Link href="/news">News</Link>
      <Link href="/research">Research</Link>
      <Link href="/publications">Publications</Link>
    </div>
  </NavBarWrapper>;
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer>
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
}

function Logo() {
  return (
    <LogoWrapper>
      Yan Yuyue
    </LogoWrapper>
  );
}