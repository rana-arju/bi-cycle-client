import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Login from './Pages/Access/Login';
import Registation from './Pages/Access/Registation';
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registation' element={<Registation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
