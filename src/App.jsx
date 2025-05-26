import CreateIAMModal from "./components/CreateIAMModal";
import Header from "./components/Header";
import Roles from "./components/Roles";
import UnassignedUsers from "./components/UnassignedUsers";
import { useState } from "react";

const App = () => {
  const [isCreateIAMModalOpen, setIsCreateIAMModalOpen] = useState(false);
  const [identities, setIdentities] = useState([]);

  const [identityPlaceholder, setIdentityPlaceholder] = useState(null);

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
            onDragIdentity={(role, identity) =>
              setIdentityPlaceholder({
                source: role,
                value: identity,
              })
            }
            identityPlaceholder={identityPlaceholder}
            authorizations={authorizations}
            onUpdateRole={(name) => {
              setAuthorizations((previousState) =>
                previousState.map((authorization) => {
                  if (
                    identityPlaceholder.source !== "UnassignedUsers" &&
                    identityPlaceholder.source === authorization.name
                  ) {
                    return {
                      ...authorization,
                      identities: authorization.identities.filter(
                        (identity) => identity !== identityPlaceholder.value
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
                      identityPlaceholder.value,
                    ],
                  };
                })
              );

              if (identityPlaceholder.source !== "UnassignedUsers") {
                return;
              }
              setIdentities((previousState) =>
                previousState.filter(
                  (identity) => identity !== identityPlaceholder.value
                )
              );
            }}
          />
        </div>
        <div className="basis-1/3">
          <UnassignedUsers
            onDragIdentity={(identity) =>
              setIdentityPlaceholder({
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
