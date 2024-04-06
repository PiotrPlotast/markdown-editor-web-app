import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <>
      <Navbar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <Sidebar sidebarIsOpen={sidebarIsOpen} />
    </>
  );
}

export default App;
