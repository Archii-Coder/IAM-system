import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

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
`;

const User = ({ children }) => {
  const [dragPosition, setDragPosition] = useState(null);

  const offsetRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!offsetRef.current) {
        return;
      }

      const offset = offsetRef.current;

      setDragPosition({
        x: event.clientX - offset.left,
        y: event.clientY - offset.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Wrapper
      onMouseDown={(event) => {
        event.preventDefault();

        const element = event.target;
        const domRect = element.getBoundingClientRect();

        offsetRef.current = {
          left: event.clientX - domRect.left,
          top: event.clientY - domRect.top,
        };
      }}
      onMouseUp={() => {
        offsetRef.current = null;
        setDragPosition(null);
      }}
      style={
        dragPosition
          ? {
              position: "fixed",
              top: `${dragPosition.y}px`,
              left: `${dragPosition.x}px`,
            }
          : {}
      }
    >
      {children}
    </Wrapper>
  );
};

export default User;
