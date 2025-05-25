import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const User = styled.button`
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

const Users = ({ data = [] }) => (
  <Container>
    {data.map((user) => (
      <User key={user}>{user}</User>
    ))}
  </Container>
);

export default Users;
