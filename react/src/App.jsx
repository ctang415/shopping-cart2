import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import Bag from './components/Bag/Bag'
import Header from './components/Header/Header'
import Store from './components/Store/Store'

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
})

function App() {
  const [ error, setError ] = useState()
  const [ loading, setLoading ] = useState(true)
  const [ products, setProducts ] = useState([])
  const [ cartItems, setCartItems ] = useState()
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
    <>
    <ShopContext.Provider value={ {products, cartItems, addToCart} }>
    <Header/>
    <Store/>
    <Bag/>
    </ShopContext.Provider>
    </>
  )
}

export default App
