import Role from "./components/Role";
import styles from "./Roles.module.css";

const Roles = ({ authorizations }) => (
  <div className={styles.container}>
    {authorizations.map(({ name, child, identities }) => (
      <Role key={name} name={name} child={child} identities={identities} />
    ))}
  </div>
);
export default Roles;
