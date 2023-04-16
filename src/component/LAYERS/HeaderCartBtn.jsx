import React from 'react'
import CartIcon from '../CART/icon.js'
import classes from './bnt.module.css'
import { useContext } from 'react'
import CartContext from '../../Store/cart-context.js'
import { useState } from 'react'
import { useEffect } from 'react'

const HeaderCartBtn = (props) => {
  const ctx = useContext(CartContext)
  const { items } = ctx
  const [showClass, setShowClass] = useState(false)
  const SumItems = items.reduce((acc, item) => acc + item.amount, 0)

  const classBTN = `${classes.button} ${showClass ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setShowClass(true)
    const timer = setTimeout(() => {
      setShowClass(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={classBTN} onClick={props.OpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{SumItems}</span>
    </button>
  )
}

export default HeaderCartBtn
