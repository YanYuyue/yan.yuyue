
import { styled } from '@linaria/react';

import { Link, Menu } from "./Link";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { useTheme } from '../utils/theme';
import { css, cx } from '@linaria/core';
import { ButtonHTMLAttributes, PropsWithChildren, useState } from 'react';
import { useBreakpoint } from '../utils/style';
import { useDisclosure } from '../utils/useDisclosure';

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

function IconButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cx(
    'clickable-icon',
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      border: inherit;
      background: inherit;
      color: inherit;
      box-shadow: inherit;

      padding: 0.5em 0.6em;

      &:hover, &:active {
        color: white;
      }

      &:focus {
        box-shadow: inherit;
      }
    `
  )} {...props} />
}

const Links = (props: { onClick?: () => void }) => <>
  <Link href="/" {...props}>Welcome</Link>
  <Link href="/news" {...props}>News</Link>
  <Link href="/cv" {...props}>CV</Link>
  <Link href="/research" {...props}>Research</Link>
  <Link href="/publications" {...props}>Publications</Link>
</>

export function NavBar() {
  const { theme, setTheme, toggleTheme } = useTheme();
  const breakpoint = useBreakpoint();
  const d = useDisclosure();
  const [pos, setPos] = useState([0, 0]);



  return <NavBarContainer>
    <NavBarWrapper>
      <div className='container'>
        <Logo />
      </div>

      <div className='container'>
        {/* full-size */}
        {breakpoint != 'sm' && <Links />}
        {breakpoint == 'sm' && <>
          <Menu {...d} positionX={pos[0]} positionY={pos[1]}>
            <Links onClick={d.onClose}/>
          </Menu>
          <IconButton
            onClick={(e) => {
              setPos([e.clientX, e.clientY]);
              d.onOpen();
            }}
          >
            {d.isOpen ? <FaBarsStaggered /> : <FaBars />}
          </IconButton>
        </>}


        <IconButton
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <FaMoon /> : <FaSun />}
        </IconButton>
      </div>
    </NavBarWrapper>
  </NavBarContainer>;
}