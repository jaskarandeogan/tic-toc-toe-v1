import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Playground from "./pages/Playground";
import DesignSystem from "./pages/DesignSystem";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/design-system" element={<DesignSystem />} />
      <Route path="*" element={<h1 className="text-light-1">404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
