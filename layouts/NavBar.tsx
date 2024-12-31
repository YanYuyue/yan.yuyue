
import { styled } from '@linaria/react';

import { Link, Menu } from "./Link";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { darkModeQuery, lightModeQuery, useTheme } from '../utils/theme';
import { css, cx } from '@linaria/core';
import { ButtonHTMLAttributes, forwardRef, PropsWithChildren, useRef, useState } from 'react';
import { mediaQueryMoreOrEqual, mediaQueryLessOrEqual, useBreakpoint } from '../utils/style';
import { useDisclosure } from '../utils/useDisclosure';

const NavBarContainer = styled.div`
  border-bottom: 1px solid var(--gray-5);
  width: 100%;
`;

const NavBarWrapper = styled.div`
  padding: 20px;
  height: 80px;
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

const IconButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { className, ...rest } = props;
  return <button ref={ref} className={cx(
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
    `,
    className,
  )} {...rest} />
})

const showOnLgSize = css`
  ${mediaQueryLessOrEqual('md')} {
    display: none;
  }
`

const hideOnLgSize = css`
  ${mediaQueryMoreOrEqual('lg')} {
    display: none; 
  }
`

const hideOnDarkMode = css`
  ${darkModeQuery} & {
    display: none;
  }
`

const hideOnLightMode = css`
  ${lightModeQuery} & { 
    display: none;
  }
`

const Links = ({ onClick, showOnLgSize: _s }: { onClick?: () => void, showOnLgSize?: boolean }) => <>
  <Link href="/" onClick={onClick} className={cx(_s && showOnLgSize)}>Welcome</Link>
  {/* <Link href="/news" onClick={onClick} className={cx(_s && showOnLgSize)}>News</Link> */}
  <Link href="/cv" onClick={onClick} className={cx(_s && showOnLgSize)}>CV</Link>
  <Link href="/research" onClick={onClick} className={cx(_s && showOnLgSize)}>Research</Link>
  <Link href="/publications" onClick={onClick} className={cx(_s && showOnLgSize)}>Publications</Link>
</>

export function NavBar() {
  const { toggleTheme } = useTheme();
  const breakpoint = useBreakpoint();
  const d = useDisclosure();
  const [pos, setPos] = useState([0, 0]);

  const ref = useRef<HTMLButtonElement>(null);

  return <NavBarContainer>
    <NavBarWrapper>
      <div className='container'>
        <Logo />
      </div>

      <div className='container'>
        {/* full-size */}

        <Links showOnLgSize />

        <IconButton
          className={hideOnLgSize}
          ref={ref}
          onClick={(e) => {
            setPos([e.clientX, e.clientY + 30]);
            d.onToggle();
          }}
        >
          {d.isOpen ? <FaBarsStaggered /> : <FaBars />}
        </IconButton>
        {breakpoint != 'lg' && <>
          <Menu {...d} positionX={pos[0]} positionY={pos[1]}>
            <Links onClick={d.onClose} />
          </Menu>
        </>}


        <IconButton
          onClick={toggleTheme}
        >
          <FaMoon className={hideOnLightMode} />
          <FaSun className={hideOnDarkMode} />
        </IconButton>
      </div>
    </NavBarWrapper>
  </NavBarContainer>;
}