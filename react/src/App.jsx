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
  let ignore = false
  
  const addToCart = (e, quantity) => {
      if ( (cartItems.find(x => e.target.id === x.item.name)) ) {
        setCartItems(cartItems.map(item => item.item.name === e.target.id ? {...item, quantity: item.quantity + parseInt(quantity)}
          : item))
      } else {
      let product = products.find( item => item.name === e.target.id)
      setCartItems(items => [...items, { item: product, quantity: parseInt(quantity) }])
      }
  }

  const removeFromCart = (e) => {
    console.log(e.target.id)
    setCartItems(cartItems.filter( item => {
        if (item.item.name !== e.target.id ) {
            return item
        }
    }
    ))
}

  useEffect(() => {
    const callAPI = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        console.log(response)
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`)
        } 
        let data = await response.json()
        console.log(data[9].title )
        data.forEach(element => setProducts( product => [...product, 
          {name: element.title.trim(), price: element.price, description: element.description, image: element.image}]))
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

    return () =>  { ignore = true}

  }, [])

  return (
    <ShopContext.Provider value={ { products, cartItems, addToCart, removeFromCart } }>
        <Header/>
        <Wrapper>
          <Outlet/>
        </Wrapper>
        <Footer/>
    </ShopContext.Provider>

  )
}

export default App
