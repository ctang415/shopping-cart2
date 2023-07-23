import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import { ShopContext } from './ShopContext'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`

const App = () => {
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [ products, setProducts ] = useState([])
  const [ cartItems, setCartItems ] = useState([])
  
  const addToCart = () => {

  }

  useEffect(() => {
    let ignore = false
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
    if (!ignore) {
      callAPI()
    }
    return () => ignore = true
  
  }, [])

  return (
    <ShopContext.Provider value={ { products, cartItems, addToCart } }>
        <Header/>
        <Wrapper>
          <Outlet/>
        </Wrapper>
        <Footer/>
    </ShopContext.Provider>

  )
}

export default App
