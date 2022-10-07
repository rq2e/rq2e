import styled, { keyframes } from "styled-components";

const Icon = styled.svg`
  width: 16px;
  height: 16px;
  position: relative;
`;

const bounce = keyframes`
  from { left: 0; }
  to { left: 10px; }
`;

const Normal = styled.button`
  display: flex;
  background: hotpink;
  color: white;
  border: 2px solid hotpink;
  margin: 1em 2em;
  padding: 1em 2em;
  font-size: 120%;
  width: 250px;
  cursor: pointer;
  gap: 10px;
  justify-content: center;
  align-items: center;

  ${({ $width }) => $width && `width: ${$width}px`};

  &:hover ${Icon} {
    animation: ${bounce} 0.2s ease-in-out alternate infinite;
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Outline = styled(Normal)`
  border-color: hotpink;
  background-color: transparent;
  color: hotpink;
`;

function Button({
  children,
  outline = false,
  disabled = false,
  className = null,
  width = null,
}) {
  const Element = outline ? Outline : Normal;
  return (
    <Element disabled={disabled} $width={width} className={className}>
      {children}
      <Icon
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 490 490"
      >
        <polygon
          points="240.112,0 481.861,245.004 240.112,490 8.139,490 250.29,245.004 8.139,0"
          fill="currentColor"
        />
      </Icon>
    </Element>
  );
}

export default Button;
