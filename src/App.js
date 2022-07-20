import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
