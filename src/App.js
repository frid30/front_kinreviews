import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Services from './pages/services/services';
import About from './pages/about/about';
import './css/bootstrap.css'
import './css/style.css'
import './css/responsive.css'
import Navbar from "./pages/navbar/navbar";
function App() {
  return (
    <div className="App">

        <Navbar
        />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
