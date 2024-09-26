import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/footer";

import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import Novedades from "./pages/Novedades";
import SobreNosotros from "./pages/SobreNosotros";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="SobreNosotros" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
