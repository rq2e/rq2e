import styled from "styled-components";

const BaseButton = styled.button`
  background: transparent;
  border: 1px solid;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 16px;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  line-height: 1;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;

const SolidButton = styled(BaseButton)`
  color: white;
  background-color: rgb(var(--color-primary));
  border-color: rgb(var(--color-primary));

  &:hover {
    background-color: rgba(var(--color-primary) / 0.85);
    border-color: rgba(var(--color-primary) / 0.85);
  }
`;

const OutlineButton = styled(BaseButton)`
  color: rgb(var(--color-primary));
  background-color: transparent;
  border-color: rgb(var(--color-primary));

  &:hover {
    background-color: rgba(var(--color-primary) / 0.15);
  }
`;

const GhostButton = styled(BaseButton)`
  color: rgb(var(--color-primary));
  background-color: transparent;
  border-color: transparent;

  &:hover {
    background-color: rgba(var(--color-primary) / 0.15);
  }
`;

const IconWrapper = styled.span`
  &,
  & svg,
  & img {
    display: block;
    width: 12px;
    height: 12px;
  }
`;

const GroupElement = styled.section`
  display: flex;
  gap: 12px;
  width: fit-content;

  ${({ $isVertical }) =>
    $isVertical &&
    `
    flex-direction: column;
    align-items: stretch;
  `}
`;

function getElement(variant) {
  switch (variant) {
    case "outline":
      return OutlineButton;
    case "ghost":
      return GhostButton;
    default:
      return SolidButton;
  }
}

function Group({ isVertical = false, children }) {
  return <GroupElement $isVertical={isVertical}>{children}</GroupElement>;
}

function Button({
  children,
  icon = null,
  isIconFirst = false,
  variant = null,
  ...props
}) {
  const Element = getElement(variant);
  return (
    <Element type="button" {...props}>
      {isIconFirst && icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
      {!isIconFirst && icon && <IconWrapper>{icon}</IconWrapper>}
    </Element>
  );
}

Button.Group = Group;

export default Button;
