import Role from "./components/Role";
import styles from "./Roles.module.css";

const Roles = () => (
  <div className={styles.container}>
    <Role
      name="User"
      child={{
        name: "System Manager",
        users: ["Daisy", "Lily", "Rose"],
        child: {
          name: "Admin",
          users: ["Violet", "David", "Dean"],
        },
      }}
      users={["Alice", "Bob", "Sam", "Dick", "Sean", "Vivian", "Melbourne"]}
    />

    <Role name="Service" users={["Jane", "Emily", "Joe"]} />
  </div>
);

export default Roles;
