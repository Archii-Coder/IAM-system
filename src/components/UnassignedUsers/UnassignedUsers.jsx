import Users from "../Users";

const UnassignedUsers = ({ onDragIdentity, identities }) => (
  <div className="bg-gray-100 p-6">
    <div className="mb-6">Unassigned Users</div>
    <Users onDragIdentity={onDragIdentity} identities={identities} />
  </div>
);
export default UnassignedUsers;
