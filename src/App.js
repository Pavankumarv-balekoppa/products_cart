// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './products';
import Navbar from './navbar';
import ProductDetails from './ProductDetails';
import Home from './home';
import Cart from './cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>

     {/* <Navbar/>
     <Home/>
    <Products/> */}
    </div>
  );
}

export default App;
