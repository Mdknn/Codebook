import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CartPage, Home, Login, ProductList, Register, } from '../pages'
import { ProductDetail } from '../pages/ProductDetails'
 


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='products' element={<ProductList/>}/>
        <Route path='products/:id' element={<ProductDetail/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default AllRoutes
