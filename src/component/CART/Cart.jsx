import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CONTEXT from '../../Store/cart-context'
import Cartitem from './CartItem'

const Cart = (props) => {
  const ctx = useContext(CONTEXT)
  const onRemoveHandler = (id) => {
    ctx.removeItem(id)
  }
  const onAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 })
  }
  const CartItem = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => {
        return (
          <Cartitem
            key={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onRemove={onRemoveHandler.bind(null, item.id)}
            onAdd={onAddHandler.bind(null, item)}
          />
        )
      })}
    </ul>
  )

  return (
    <Modal CloseCart={props.CloseCart}>
      {CartItem}
      <div className={classes.total}>
        <span>Totall amount</span>
        <span>{ctx.totalAmount.toFixed(2)}$</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.CloseCart} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
