import Users from "../Users";

const UnassignedUsers = ({ identities }) => (
  <div className="bg-gray-100 p-6">
    <div className="mb-6">UnassignedUsers</div>
    <Users identities={identities} />
  </div>
);
export default UnassignedUsers;
