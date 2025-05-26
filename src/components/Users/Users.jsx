import styled from "styled-components";
import User from "./components/User";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Users = ({ identities = [], placeholder, onDragIdentity }) => (
  <Container>
    {identities.map((identity) => (
      <User onDragStart={() => onDragIdentity(identity)} key={identity}>
        {identity}
      </User>
    ))}
    {placeholder && <User isPlaceholder>{placeholder.value}</User>}
  </Container>
);
export default Users;
