import { useRef, useState, Children, useMemo } from "react";
import styled from "styled-components";
import { Item, Content, Header, ItemContext } from "./AccordionItem";

const AccordionElement = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid rgb(var(--color-primary));
  padding: 6px;
  border-radius: 6px;
  text-align: left;
`;

function toggle(activeIndexes, index, allowsMultiple, isCollapsible) {
  const wasOn = activeIndexes.includes(index);
  if (allowsMultiple) {
    if (!wasOn) {
      return activeIndexes.concat([index]);
    } else {
      return activeIndexes.filter((oldIndex) => index !== oldIndex);
    }
  }
  if (!wasOn) {
    return [index];
  } else if (isCollapsible) {
    return [];
  }
  return activeIndexes;
}

function Accordion({
  activeIndex: defaultActiveIndex = 0,
  isCollapsible = false,
  allowsMultiple = false,
  children,
}) {
  const [activeIndexes, setActiveIndexes] = useState(
    defaultActiveIndex > -1 ? [defaultActiveIndex] : []
  );
  const click = (index) =>
    setActiveIndexes((oldActive) =>
      toggle(oldActive, index, allowsMultiple, isCollapsible)
    );
  const focus = (index) =>
    ref.current?.querySelectorAll("button[data-header]")[index]?.focus();
  const ref = useRef(null);
  const items = Children.toArray(children);
  const getCurrentFocus = () => {
    let item;
    try {
      item = ref.current.querySelector("article:has(:focus)");
    } catch {
      item = ref.current.querySelector(":focus").closest("article");
    }
    const index = Array.from(item.parentNode.children).indexOf(item);
    return index;
  };
  const onKeyDown = (evt) => {
    const currentIndex = getCurrentFocus();
    switch (evt.key.toLowerCase()) {
      case "arrowup":
        focus((currentIndex - 1 + items.length) % items.length);
        break;
      case "arrowdown":
        focus((currentIndex + 1) % items.length);
        break;
      case "home":
        focus(0);
        break;
      case "end":
        focus(items.length - 1);
        break;
      default:
        break;
    }
  };
  const accordionId = useMemo(() => `accordion-${Math.random()}`, []);
  const getItemContext = (index) => ({
    headerId: `${accordionId}-header-${index}`,
    contentId: `${accordionId}-content-${index}`,
    isActive: activeIndexes.includes(index),
    click: () => click(index),
  });
  return (
    <AccordionElement ref={ref} onKeyDown={onKeyDown}>
      {items.map((item, index) => (
        <ItemContext.Provider value={getItemContext(index)} key={index}>
          {item}
        </ItemContext.Provider>
      ))}
    </AccordionElement>
  );
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
