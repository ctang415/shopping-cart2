import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Bag from './components/Bag/Bag'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import Store from './components/Store/Store'
import { ShopContext } from './ShopContext'

const App = () => {

  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [ products, setProducts ] = useState([])
  const [ cartItems, setCartItems ] = useState([])
  let load = false
  
  const addToCart = () => {

  }

  useEffect(() => {
    if (!load) {
    const callAPI = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        console.log(response)
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`)
        } 
        let data = await response.json()
        data.forEach(element => setProducts( product => [...product, 
          {name: element.title, price: element.price, description: element.description, image: element.image}]))
        setError(null)
    } catch(err) { 
      setError(err.message)
      setProducts(null)
    } finally {
      setLoading(false)
    }
  }
    callAPI()
    load = true
  }
  }, [])

  return (
    <ShopContext.Provider value={ { products, cartItems, addToCart } }>
      <Header/>
      <Home/>
      <Outlet/>
    </ShopContext.Provider>

  )
}

export default App
