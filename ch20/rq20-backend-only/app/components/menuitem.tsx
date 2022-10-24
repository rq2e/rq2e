import type { PropsWithChildren } from "react";
import styled from "styled-components";
import { Link } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/dist/components";

const ListItem = styled.li`
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)<{ $isCurrent: boolean }>`
  display: block;
  font-size: 90%;
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  color: inherit;
  text-decoration: none;

  ${({ $isCurrent, theme }) =>
    $isCurrent
      ? `
        color: white;
        background-color: ${theme.colors.palatinate};
        `
      : `
        &:hover {
          color: ${theme.colors.palatinate};
        }`}
`;

function MenuItem({
  to,
  children,
  isCurrent = false,
}: PropsWithChildren<Pick<RemixLinkProps, "to"> & { isCurrent?: boolean }>) {
  return (
    <ListItem>
      <StyledLink to={to} $isCurrent={isCurrent}>
        {children}
      </StyledLink>
    </ListItem>
  );
}

export default MenuItem;
