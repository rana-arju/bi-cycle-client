import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Login from './Pages/Access/Login';
import Registation from './Pages/Access/Registation';
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import Blog from "./Pages/Blog/Blog";
import Profile from "./Deshboard/Profile/Profile";
import Portfolio from "./Pages/Portfolio/Portfolio";
function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registation' element={<Registation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
