import React from "react";
import Navbar from './component/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import cart from "./pages/cart/cart"
import placeOrder from "./pages/placeOrder/placeOrder"
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<cart/>}/>
                <Route path='/order' element={<placeOrder/>}/>
            </Routes>
        </div>
        <Footer/>
        </>
    )
}

export default App