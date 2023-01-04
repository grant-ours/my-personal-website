import "./App.css";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
