import React from 'react'
import classes from './MealItem.module.css'
import MealForm from './MealForm'
import Context from '../../../Store/cart-context'
import { useContext } from 'react'

const MealItem = (props) => {
  const CTX = useContext(Context)

  const prices = `$${props.price.toFixed(2)}`

  const onAddToCart = (amount) => {
    CTX.addItem({
      name: props.name,
      amount,
      price: props.price,
      id: props.id,
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{prices}</div>
      </div>
      <div>
        <MealForm onAddToCart={onAddToCart} />
      </div>
    </li>
  )
}

export default MealItem
