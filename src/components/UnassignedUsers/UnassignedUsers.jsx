import Users from "../Users";

const UnassignedUsers = () => (
  <div className="bg-gray-100 p-6">
    <div className="mb-6">UnassignedUsers</div>
    <Users data={["Ben", "Max", "Justin"]} />
  </div>
);

export default UnassignedUsers;
