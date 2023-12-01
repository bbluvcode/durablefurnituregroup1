import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './pages_binh/Header.css';
import { Routes, Route } from 'react-router-dom'
import ShopingCart from './pages_binh/ShopingCart';
import Contact from './pages_binh/Contact';
import Compare from './pages_binh/Compare';
import Header from './pages_binh/Header';
import Home from './pages_bao/Home';
import { useState, useEffect } from 'react';

function App() {
  const linkHome = "/"
  const linkProduct = "/"
  const linkBrandname = "/"
  const linkRoom = "/"
  const linkInspiration = "/"
  const linkShopingcart = "/shopingcart"
  const linkContact = "/contact"
  const linkCompare = "/compare"

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://653f52049e8bd3be29e0427e.mockapi.io/products")
    .then((data)=>data.json())
    .then(dataList => setProducts(dataList))
  },[])

  return (
    <div className="App container-fluid g-0">
      <Header link={linkContact}/>
      <Routes>
        <Route path={linkHome} element={<Home products = {products}/>}></Route>
        <Route path={linkProduct}></Route>
        <Route path={linkBrandname}></Route>
        <Route path={linkRoom}></Route>
        <Route path={linkInspiration}></Route>
        <Route path={linkShopingcart} element={<ShopingCart />} />
        <Route path={linkContact} element={<Contact />} />
        <Route path={linkCompare} element={<Compare />} />
      </Routes>

    </div>
  );
}

export default App;
