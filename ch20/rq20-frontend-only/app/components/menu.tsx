import type { PropsWithChildren } from "react";
import styled from "styled-components";
import FormMenuItem from "./formmenuitem";
import MenuItem from "./menuitem";

const Nav = styled.nav`
  background-color: white;
  border-radius: 0.5em;
  padding: 0.25em;
  margin-bottom: 0.25em;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0.25em;
  margin: 0;
`;

function Menu({ children }: PropsWithChildren) {
  return (
    <Nav>
      <Ul>{children}</Ul>
    </Nav>
  );
}

type MenuProps = PropsWithChildren<{ current?: String }>;

export function AuthMenu({ current = "", children }: MenuProps) {
  return (
    <>
      <Menu>
        <MenuItem to="/" isCurrent={current === ""}>
          Dashboard
        </MenuItem>
        <MenuItem to="/income" isCurrent={current === "income"}>
          Income
        </MenuItem>
        <MenuItem to="/expenses" isCurrent={current === "expenses"}>
          Expenses
        </MenuItem>
        <FormMenuItem to="/logout">Log out</FormMenuItem>
      </Menu>
      {children}
    </>
  );
}

export function UnauthMenu({ current = "", children }: MenuProps) {
  return (
    <>
      <Menu>
        <MenuItem to="/" isCurrent={current === ""}>
          Welcome
        </MenuItem>
        <MenuItem to="/login" isCurrent={current === "login"}>
          Login
        </MenuItem>
        <MenuItem to="/join" isCurrent={current === "join"}>
          Signup
        </MenuItem>
      </Menu>
      {children}
    </>
  );
}
