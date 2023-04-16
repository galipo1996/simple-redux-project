import Headers from './component/LAYERS/Headers'
import Meals from './component/MEALS/Meals'
import Cart from './component/CART/Cart'
import { useState } from 'react'
import CartProvider from './Store/CartProvider'

function App() {
  const [show, setShow] = useState(false)
  const CloseCart = () => {
    setShow(false)
  }
  const OpenCart = () => {
    setShow(true)
  }

  return (
    <CartProvider>
      {show ? <Cart CloseCart={CloseCart} /> : ''}
      <Headers OpenCart={OpenCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
