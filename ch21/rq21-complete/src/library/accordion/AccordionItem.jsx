import { useContext } from "react";
import { createContext } from "react";
import styled from "styled-components";

export const ItemContext = createContext({});

const HeaderElement = styled.button.attrs({ "data-header": true })`
  background-color: transparent;
  border: 1px solid;
  color: rgb(var(--color-primary));
  border-width: 1px 0 0;
  text-align: inherit;
  padding: 4px 6px;
  font-size: 20px;
  cursor: pointer;
  transition-duration: 0;
  transition-property: background-color, color;

  &:hover {
    background-color: rgba(var(--color-primary) / 0.15);
  }
  &:focus-visible {
    outline: 1px dashed rgb(var(--color-primary));
  }
`;

const ContentElement = styled.section`
  padding: 6px 6px 18px;
`;

const ItemElement = styled.article`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${({ $isExpanded }) =>
    $isExpanded &&
    `
  ${HeaderElement} {
    background-color: rgb(var(--color-primary));
    color: white;
    transition-duration: 0.2s;

    &:hover {
      background-color: rgba(var(--color-primary) / 0.85);
    }
  }
  `};
`;

export function Item({ children }) {
  const { isActive } = useContext(ItemContext);
  return <ItemElement $isExpanded={isActive}>{children}</ItemElement>;
}

export function Header({ children }) {
  const { isActive, contentId, headerId, click } = useContext(ItemContext);
  return (
    <HeaderElement
      onClick={click}
      aria-expanded={isActive}
      aria-controls={contentId}
      id={headerId}
    >
      {children}
    </HeaderElement>
  );
}

export function Content({ children }) {
  const { isActive, contentId, headerId } = useContext(ItemContext);
  return (
    <ContentElement
      id={contentId}
      aria-labelledby={headerId}
      hidden={!isActive}
    >
      {children}
    </ContentElement>
  );
}
