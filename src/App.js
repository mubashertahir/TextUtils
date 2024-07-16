import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    // setMode(mode === 'light' ? 'dark' : 'light');
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3a3b3c";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
    <Navbar title="Mubasher" mode={mode} toggleMode={toggleMode} />
    <TextArea title="Change Text Cases" mode={mode} />

      {/* <Router>
        <Navbar title="Mubasher" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={<TextArea title="Change Text Cases" mode={mode} />}
          />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
