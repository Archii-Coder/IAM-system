import User from "./components/User";
import DropZone from "../DropZone";
import { useIAM } from "../IAM";

const Users = ({ role, identities }) => {
  const { draggingIAM, setDraggingIAM, setIdentities, setAuthorizations } =
    useIAM();

  return (
    <DropZone
      className="flex gap-2 flex-wrap align-content-start items-start min-h-[50px] min-w-[200px]"
      isDroppable={draggingIAM?.type === "user"}
      preview={draggingIAM?.type === "user" && <User>{draggingIAM.value}</User>}
      onDrop={() => {
        if (draggingIAM.type !== "user") {
          return;
        }

        setIdentities((previousState) =>
          previousState.filter((identity) => identity !== draggingIAM.value)
        );

        setAuthorizations((previousState) => {
          const target = role;
          const { source } = draggingIAM;

          const addOrRemove = (authorization) => {
            if (authorization.name === target) {
              authorization.identities.push(draggingIAM.value);
            }

            if (authorization.name === source) {
              authorization.identities = authorization.identities.filter(
                (identity) => identity !== draggingIAM.value
              );
            }

            if (authorization.child) {
              authorization.child = addOrRemove(authorization.child);
            }

            return authorization;
          };

          return previousState.map((authorization) =>
            addOrRemove(authorization)
          );
        });

        setDraggingIAM(null);
      }}
    >
      {identities.map((identity) => (
        <User role={role} key={identity}>
          {identity}
        </User>
      ))}
    </DropZone>
  );
};

export default Users;
