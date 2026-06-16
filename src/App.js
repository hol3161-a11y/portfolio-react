import "./styles/reset.scss";
import "./styles/common.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
