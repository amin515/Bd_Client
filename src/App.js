
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import SinglePage from './pages/Singlepage/SinglePage';
import Category from './pages/Category/Category';
import ThankYou from './pages/ThankYou/ThankYou';
import CheckOut from './pages/CheckOut/CheckOut';
import Shop from './pages/Shop/Shop';
import { Route,  Routes } from 'react-router-dom';
import AddToCart from './pages/AddToCart/AddToCart';
import MyAccount from './pages/MyAccount/MyAccount';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SiteCanvas from './Components/SiteCanvas/SiteCanvas';


function App() {
  return (
   <>
     <Header/>
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/singlepage' element={<SinglePage />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/thankyou' element={<ThankYou />}/>
        <Route path='/checkout' element={<CheckOut />}/>
        <Route path='/addtocart' element={<AddToCart />}/>
        <Route path='/myaccount' element={<MyAccount />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
     </Routes>
     <Footer/>
   </>
  );
}

export default App;
