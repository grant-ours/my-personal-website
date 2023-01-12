import "./App.css";
import HomePage from "./HomePage";
import CVPage from "./CVPage";
import ContactInfo from "./ContactInfo";
import ProjectPage from "./ProjectPage";
import { Route, Routes } from "react-router-dom";

// bootstrap!
// material design, materialize css, material-ui
// bulma
// foundation

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/contact-info" element={<ContactInfo />} />
    </Routes>
  );
}

export default App;
