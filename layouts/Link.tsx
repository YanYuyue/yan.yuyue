import { cx } from "@linaria/core";
import { styled } from "@linaria/react";
import { usePageContext } from "vike-react/usePageContext";

const LinkAnchor = styled.a`

  padding: 2px 10px;
  margin-left: -10px;

  &.is-active {
    background-color: var(--gray-6)
  }
`

export function Link({ href, children }: { href: string; children: string }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <LinkAnchor href={href} className={cx(isActive && "is-active")}>
      {children}
    </LinkAnchor>
  );
}
