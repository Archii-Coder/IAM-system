import CreateIAMModal from "./components/CreateIAMModal";
import Header from "./components/Header";
import Roles from "./components/Roles";
import UnassignedUsers from "./components/UnassignedUsers";
import { useState } from "react";

const App = () => {
  const [isCreateIAMModalOpen, setIsCreateIAMModalOpen] = useState(false);
  const [identities, setIdentities] = useState([]);

  const [isDraggingIAM, setIsDraggingIAM] = useState(null);

  const [authorizations, setAuthorizations] = useState([
    {
      name: "Users",
      placeholder: "Bob",
      identities: [],
    },
    {
      name: "Admin",
      placeholder: "Bob",
      identities: [],
    },
  ]);

  return (
    <div className="max-w-[1280px] mx-auto py-16">
      <Header onNewIAMClick={() => setIsCreateIAMModalOpen(true)} />
      <div className="flex mt-8 gap-8">
        <div className="basis-2/3">
          <Roles
            placeholder={isDraggingIAM}
            authorizations={authorizations}
            onDragIdentity={(role, identity) =>
              setIsDraggingIAM({
                type: "user",
                source: role,
                value: identity,
              })
            }
            onDropIdentity={(name) => {
              if (isDraggingIAM.type !== "user") {
                return;
              }

              setAuthorizations((previousState) =>
                previousState.map((authorization) => {
                  if (
                    isDraggingIAM.source !== "UnassignedUsers" &&
                    isDraggingIAM.source === authorization.name
                  ) {
                    return {
                      ...authorization,
                      identities: authorization.identities.filter(
                        (identity) => identity !== isDraggingIAM.value
                      ),
                    };
                  }

                  if (authorization.name !== name) {
                    return authorization;
                  }

                  return {
                    ...authorization,
                    identities: [
                      ...authorization.identities,
                      isDraggingIAM.value,
                    ],
                  };
                })
              );

              if (isDraggingIAM.source !== "UnassignedUsers") {
                return;
              }
              setIdentities((previousState) =>
                previousState.filter(
                  (identity) => identity !== isDraggingIAM.value
                )
              );
            }}
            onDragRole={(source, role) =>
              setIsDraggingIAM({ type: "role", source, value: role })
            }
            onDropRole={(target) => {
              if (!isDraggingIAM.type === "role") {
                return;
              }

              setAuthorizations((previousState) =>
                previousState
                  .filter(
                    (authorization) =>
                      authorization.name !== isDraggingIAM.source
                  )
                  .map((authorization) => {
                    if (authorization.name !== target) {
                      return authorization;
                    }

                    return {
                      ...authorization,
                      child: isDraggingIAM.value,
                    };
                  })
              );
            }}
          />
        </div>
        <div className="basis-1/3">
          <UnassignedUsers
            onDragIdentity={(identity) =>
              setIsDraggingIAM({
                type: "user",
                source: "UnassignedUsers",
                value: identity,
              })
            }
            identities={identities}
          />
        </div>
      </div>
      <CreateIAMModal
        isOpen={isCreateIAMModalOpen}
        onClose={() => setIsCreateIAMModalOpen(false)}
        onCreateUser={(name) =>
          setIdentities((previousState) => [...previousState, name])
        }
        onCreateRole={(name) =>
          setAuthorizations((previousState) => [
            ...previousState,
            { name, identities: [] },
          ])
        }
      />
    </div>
  );
};

export default App;
