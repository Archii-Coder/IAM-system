import Role from "./components/Role";
import styles from "./Roles.module.css";

const Roles = ({ authorizations, placeholder, onUpdateRole }) => (
  <div className={styles.container}>
    {authorizations.map(({ name, child, identities }) => (
      <Role
        key={name}
        name={name}
        child={child}
        identities={identities}
        placeholder={placeholder}
        onUpdate={() => onUpdateRole(name)}
      />
    ))}
  </div>
);
export default Roles;
