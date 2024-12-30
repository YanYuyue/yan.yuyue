
import { styled } from '@linaria/react';

import { Link } from "./Link";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from './theme';
import { css, cx } from '@linaria/core';

const NavBarContainer = styled.div`
  border-bottom: 1px solid var(--gray-5);
  width: 100%;
`;

const NavBarWrapper = styled.div`
  padding: 20px;
  max-width: var(--layout-max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 1.8em;

  & > .container {
    display: flex;
    gap: 10px;
  }
`;

const LogoWrapper = styled.div`
`;

function Logo() {
  return (
    <LogoWrapper>
      Yan Yuyue
    </LogoWrapper>
  );
}


export function NavBar() {
  const { theme, setTheme, toggleTheme } = useTheme();
  return <NavBarContainer>
    <NavBarWrapper>
      <div className='container'>
        <Logo />
      </div>

      <div className='container'>
        <Link href="/">Welcome</Link>
        <Link href="/news">News</Link>
        <Link href="/cv">CV</Link>
        <Link href="/research">Research</Link>
        <Link href="/publications">Publications</Link>
        <div className={cx(
          'clickable-icon',
          css`
            display: flex;
            justify-content: center;
            align-items: center;
          `
        )} onClick={toggleTheme}>
          { theme === 'dark' ? <FaMoon/> : <FaSun/> }
        </div>
      </div>
    </NavBarWrapper>
  </NavBarContainer>;
}