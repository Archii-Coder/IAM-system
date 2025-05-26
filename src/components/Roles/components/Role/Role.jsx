import { useState } from "react";
import Users from "../../../Users";
import styles from "./Role.module.css";

const Role = ({ name, identities, child, placeholder, onUpdate }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
        console.log("onDragEnter");

        setIsDraggingOver(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();

        setIsDraggingOver(false);
      }}
      onDrop={(event) => {
        event.preventDefault();
        console.log("onDrop");

        setIsDraggingOver(null);

        onUpdate();
      }}
      className={styles.container}
    >
      <div className={styles.name}>{name}</div>
      <div className="flex gap-4">
        {child && (
          <Role
            child={child.child}
            name={child.name}
            users={child.identities}
          />
        )}
        <Users
          placeholder={isDraggingOver && placeholder}
          identities={identities}
        />
      </div>
    </div>
  );
};
export default Role;
