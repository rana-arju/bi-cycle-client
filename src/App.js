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
import Update from "./Deshboard/Profile/Update";
import Deshboard from "./Deshboard/Deshboard";
import AddReview from "./Deshboard/AddReview/AddReview";
import MyOrders from "./Deshboard/MyOrders/MyOrders";
import MakeAdmin from "./Deshboard/MakeAdmin/MakeAdmin";
import ManageProduct from "./Deshboard/ManageProduct/ManageProduct";
import ManageOrders from "./Deshboard/ManageOrders/ManageOrders";
import Purchase from "./Shared/Purchase/Purchase";
import AddProduct from "./Deshboard/AddProduct/AddProduct";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import RequireAdmin from "./Shared/RequireAdmin/RequireAdmin";
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
          <Route path="/update" element={<Update />} />
          <Route path="/purchase/:id" element={<RequireAuth>
            <Purchase />
          </RequireAuth>
          } /> 
          <Route path="/deshboard" element={<RequireAuth>
            <Deshboard />
          </RequireAuth>
          } >
            <Route index element={<Profile />} />
            <Route path="update" element={<Update />} />
            <Route path="review" element={<AddReview />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="manageproduct" element={<ManageProduct />} />
            <Route path="manageorders" element={<ManageOrders />} />
            <Route path="makeadmin" element={<RequireAdmin>
                <MakeAdmin />
            </RequireAdmin>
            } />
            <Route path="addproduct" element={<AddProduct />} />
           </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
       <ToastContainer />
    </div>
  );
}

export default App;
