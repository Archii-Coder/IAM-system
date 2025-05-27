import User from "./components/User";
import DropZone from "../DropZone";

const Users = ({ identities, placeholder, onDragIdentity, onDrop }) => (
  <DropZone
    className="flex gap-2 flex-wrap align-content-start items-start min-h-[50px] min-w-[200px]"
    isDroppable={placeholder?.type === "user"}
    preview={
      placeholder?.type === "user" && (
        <User isPlaceholder>{placeholder.value}</User>
      )
    }
    onDrop={onDrop}
  >
    {identities.map((identity) => (
      <User onDragStart={() => onDragIdentity(identity)} key={identity}>
        {identity}
      </User>
    ))}
  </DropZone>
);

export default Users;
