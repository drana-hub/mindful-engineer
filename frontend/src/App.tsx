import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Home from "./pages/Home";
import Meditations from "./pages/Meditations";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
      <div className="app-container">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/meditations" element={<Meditations />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
