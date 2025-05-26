import { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.span`
  cursor: pointer;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f3f4f6;
  }

  ${({ mousePosition }) => {
    if (!mousePosition) {
      return null;
    }

    return css`
      position: fixed;
      top: ${mousePosition}px;
      lett: ${mousePosition}px;
    `;
  }}
`;

const User = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(null);

  return (
    <Wrapper
      draggable
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={(event) => {
        if (!isDragging) {
          return;
        }

        setDragPosition({
          x: event.pageX,
          y: event.pageY,
        });
      }}
      onMouseUp={() => setIsDragging(false)}
      dragPosition={dragPosition}
    >
      {children}
    </Wrapper>
  );
};

export default User;
