import "./style.css";
import styled from "styled-components";
import React from "react";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";

const Container = styled.div`
  display: flex;
  max-width: 900px;
  margin: auto;
`;

const SidebarWrapper = styled.div`
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  border-right: 2px solid #eee;
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
  margin-top: 20px;
  margin-bottom: 10px;
`;

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Sidebar>
        <Logo />
        <Link href="/">Welcome</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/star-wars">Data Fetching</Link>
        {""}
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return <SidebarWrapper>{children}</SidebarWrapper>;
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
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </LogoWrapper>
  );
}