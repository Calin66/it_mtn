import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Form from "./components/Signup_form/Form";
import DetaliiCont from "./pages/DetaliiCont";
import Internships from "./pages/Internships";
import Postare from "./pages/CreeazaCV";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/detaliicont" element={<DetaliiCont />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/creeazacv" element={<Postare/>} />
      </Routes>
    </Router>
  );
}

export default App;
