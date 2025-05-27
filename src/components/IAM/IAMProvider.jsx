import IAMContext from "./IAMContext";
import { useState } from "react";

const IAMProvider = ({ children }) => {
  const [draggingIAM, setDraggingIAM] = useState(null);

  const [identities, setIdentities] = useState(["Alice"]);

  const [authorizations, setAuthorizations] = useState([
    {
      name: "Users",
      identities: [],
    },
    {
      name: "Admin",
      identities: [],
    },
  ]);

  return (
    <IAMContext.Provider
      value={{
        authorizations,
        setAuthorizations,
        identities,
        setIdentities,
        draggingIAM,
        setDraggingIAM,
      }}
    >
      {children}
    </IAMContext.Provider>
  );
};

export default IAMProvider;
