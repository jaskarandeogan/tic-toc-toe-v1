import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Playground from "./pages/Playground";
import DesignSystem from "./pages/DesignSystem";
import Game from "./pages/Game";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/design-system" element={<DesignSystem />} />
      <Route path="/:player" element={<Game />} />
      <Route path="*" element={<h1 className="text-light-1">404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
