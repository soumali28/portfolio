import Contact from "./pages/contact";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
