import React, { useState } from 'react'
import { Contexto } from './Contexto'

const Provider = ({children}) => {

  const [cartItems, setCartItems] = useState([]);

  


  return (
    <Contexto.Provider value={{
      cartItems,
      setCartItems,
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider
