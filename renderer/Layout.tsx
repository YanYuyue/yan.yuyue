import React from 'react'
import { styled } from '@linaria/react'
import logoUrl from './logo.svg'
import { PageContextProvider } from './usePageContext'
import { Link } from './Link'
import type { PageContext } from 'vike/types'
import './css/index.css'

const StyledFrame = styled.div`
  display: flex;
  max-width: 900px;
  margin: auto;
`

const StyledSidebar = styled.div`
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  border-right: 2px solid #eee;
`

const PageContainer = styled.div``

const PageContent = styled.div`
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;
`

const LogoWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`

function Layout({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Frame>
          <Sidebar>
            <Logo />
            <Link href="/">Welcome</Link>
            <Link href="/about">About</Link>
            <Link href="/star-wars">Data Fetching</Link>
          </Sidebar>
          <Content>{children}</Content>
        </Frame>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  return <StyledFrame>{children}</StyledFrame>
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return <StyledSidebar>{children}</StyledSidebar>
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer>
      <PageContent>{children}</PageContent>
    </PageContainer>
  )
}

function Logo() {
  return (
    <LogoWrapper>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </LogoWrapper>
  )
}

export { Layout }