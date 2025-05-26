import Users from "../../../Users";
import styles from "./Role.module.css";

const Role = ({ name, identities, child }) => (
  <div className={styles.container}>
    <div className={styles.name}>{name}</div>
    <div className="flex gap-4">
      {child && (
        <Role child={child.child} name={child.name} users={child.identities} />
      )}
      <Users identities={identities} />
    </div>
  </div>
);

export default Role;
