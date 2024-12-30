import { cx } from "@linaria/core";
import { styled } from "@linaria/react";
import { HTMLAttributes } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { createPortal } from 'react-dom';

const MenuContainer = styled.div`
  position: absolute;
`

const MenuWrapper = styled.div`
  z-index: 120;
  background-color: var(--gray-7);
  border: var(--gray-5);
  box-shadow: 0 0 20px #00000030;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  right: 0;
  min-width: 100px;
  min-height: 16px;

`

export const Menu = (props: HTMLAttributes<HTMLDivElement> & {
  isOpen?: boolean;
  positionX?: number;
  positionY?: number;
  onClose?: () => void;
  onOpen?: () => void;
  onToggle?: () => void;
}) => {

  if (!props.isOpen) {
    return undefined;
  }

  const { isOpen, positionX, positionY, onClose, onOpen, onToggle, ...rest } = props;

  return createPortal(
    <MenuContainer style={{
      left: positionX,
      top: positionY,
    }} onBlur={onClose}>
      <MenuWrapper {...rest} />
    </MenuContainer>,
    document.getElementById('portal-root')!,
  )

}

const LinkAnchor = styled.a`

  padding: 3px 10px;

  &.is-active {
    background-color: var(--gray-6)
  }

  ${MenuWrapper} & {
    padding: 10px 18px;
  }

  ${MenuWrapper} &:nth-child(1n+2) {
    border-top: 1px solid var(--gray-6);
  }
`

export function Link({ href, children, onClick }: { href: string; children: string, onClick?: () => void }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <LinkAnchor href={href} className={cx(isActive && "is-active")} onClick={onClick}>
      {children}
    </LinkAnchor>
  );
}
