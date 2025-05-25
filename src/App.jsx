import CreateIAMModal from "./components/CreateIAMModal";
import Header from "./components/Header";
import Roles from "./components/Roles";
import UnassignedUsers from "./components/UnassignedUsers";

const App = () => (
  <div className="max-w-[1280px] mx-auto py-16">
    <Header />
    <div className="flex mt-8 gap-8">
      <div className="basis-2/3">
        <Roles />
      </div>
      <div className="basis-1/3">
        <UnassignedUsers />
      </div>
    </div>
    <CreateIAMModal />
  </div>
);

export default App;
