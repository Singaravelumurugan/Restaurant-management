import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Layout/Navbar";
import Homes from "./pages/pages/Homes";
import Products from "./pages/pages/Product";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./components/Layout/Login";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Category from "./pages/Category";
import AddEmployee from "./pages/pages/AddEmployee";
import Restaurant from "./pages/pages/Restaurant";
import ShowEmployeeDetails from"./pages/pages/ShowEmployeeDetails ";
import Orders from "./pages/pages/Orders";
import Orderslist from "./pages/pages/Orderslist";
import Bill from "./pages/pages/Bill";

function App() {
  return (
    <div>
      <BrowserRouter>
          <UserAuthContextProvider>
            <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Homes />} />
          <Route path='/add' element={<AddEmployee />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/orderslist' element={<Orderslist />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/bill' element={<Bill />} />
          <Route path='/products' element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category" element={<Category />} />
          <Route path="/showemployeedetails" element={<ShowEmployeeDetails />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        </UserAuthContextProvider>
    
      </BrowserRouter>
    </div>
  );
}

export default App;