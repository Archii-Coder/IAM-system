import Role from "./components/Role";
import styles from "./Roles.module.css";

const Roles = ({
  authorizations,
  identityPlaceholder,
  onDragIdentity,
  onUpdateRole,
}) => (
  <div className={styles.container}>
    {authorizations.map(({ name, child, identities }) => (
      <Role
        onDragIdentity={(identity) => onDragIdentity(name, identity)}
        key={name}
        name={name}
        child={child}
        identities={identities}
        identityPlaceholder={identityPlaceholder}
        onUpdate={() => onUpdateRole(name)}
      />
    ))}
  </div>
);
export default Roles;
