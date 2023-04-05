import { useState } from "react";
import "./App.scss";
import { Hero, Navbar } from "./components";
import { useMediaQuery } from "react-responsive";

function App() {
  const [isMenuPanelOpen, setIsMenuPanelOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="app">
      <Navbar
        isMenuPanelOpen={isMenuPanelOpen}
        setIsMenuPanelOpen={setIsMenuPanelOpen}
      />
      <Hero />
      {isMenuPanelOpen && isTabletOrMobile && (
        <div className="app_overlay"></div>
      )}
    </div>
  );
}

export default App;
