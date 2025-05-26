import CreateIAMModal from "./components/CreateIAMModal";
import Header from "./components/Header";
import Roles from "./components/Roles";
import UnassignedUsers from "./components/UnassignedUsers";
import { useState } from "react";

const App = () => {
  const [isCreateIAMModalOpen, setIsCreateIAMModalOpen] = useState(false);
  const [identities, setIdentities] = useState([]);
  const [authorizations, setAuthorizations] = useState([]);

  return (
    <div className="max-w-[1280px] mx-auto py-16">
      <Header onNewIAMClick={() => setIsCreateIAMModalOpen(true)} />
      <div className="flex mt-8 gap-8">
        <div className="basis-2/3">
          <Roles authorizations={authorizations} />
        </div>
        <div className="basis-1/3">
          <UnassignedUsers identities={identities} />
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
