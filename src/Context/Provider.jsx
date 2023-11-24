import React, { useState } from 'react'
import { Contexto } from './Contexto'

const Provider = ({children}) => {

  const [cartItems, setCartItems] = useState([]);
  const [itemSelected, setItemSelected] = useState();

  


  return (
    <Contexto.Provider value={{
      cartItems,
      setCartItems,
      itemSelected,
      setItemSelected
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider
