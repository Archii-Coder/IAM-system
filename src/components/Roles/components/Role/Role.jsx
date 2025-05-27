import Users from "../../../Users";
import styles from "./Role.module.css";
import DropZone from "../../../DropZone";
import Draggable from "../../../Draggable";

const Role = ({
  name,
  identities,
  child,
  onDragIdentity,
  onDragStart,
  onDrop,
  placeholder,
  onDropIdentity,
}) => (
  <Draggable onDragStart={onDragStart} className={styles.container}>
    <DropZone
      isDroppable={placeholder?.type === "role"}
      onDrop={onDrop}
      preview={
        placeholder?.type === "role" &&
        placeholder.source !== name && (
          <Role
            isPlaceholder
            name={placeholder.value.name}
            identities={placeholder.value.identities}
            child={placeholder.value.child}
          />
        )
      }
    >
      <div className={styles.name}>{name}</div>
      <div className="flex gap-4">
        {child && (
          <Role
            child={child.child}
            name={child.name}
            identities={child.identities}
          />
        )}

        <Users
          role={name}
          onDragIdentity={onDragIdentity}
          placeholder={placeholder}
          identities={identities}
          onDrop={onDropIdentity}
        />
      </div>
    </DropZone>
  </Draggable>
);

export default Role;
