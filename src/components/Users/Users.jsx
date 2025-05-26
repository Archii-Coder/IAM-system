import styled from "styled-components";
import User from "./components/User";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Users = ({ identities = [] }) => (
  <Container>
    {identities.map((identity) => (
      <User key={identity}>{identity}</User>
    ))}
  </Container>
);

export default Users;
