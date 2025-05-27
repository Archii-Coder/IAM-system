import Role from "./components/Role";
import styles from "./Roles.module.css";

const Roles = ({
  authorizations,
  placeholder,
  onDragRole,
  onDropRole,
  onDragIdentity,
  onDropIdentity,
}) => (
  <div className={styles.container}>
    {authorizations.map(({ name, child, identities }) => {
      return (
        <Role
          placeholder={placeholder}
          onDragStart={() => onDragRole(name, { name, child, identities })}
          onDrop={() => onDropRole(name)}
          onDragIdentity={(identity) => onDragIdentity(name, identity)}
          onDropIdentity={() => onDropIdentity(name)}
          key={name}
          name={name}
          child={child}
          identities={identities}
        />
      );
    })}
  </div>
);
export default Roles;
