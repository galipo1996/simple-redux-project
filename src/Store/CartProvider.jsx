import React from 'react'
import cartContext from './cart-context'
import { useReducer } from 'react'

const defaultState = {
  items: [],
  totalAmount: 0,
}

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    const totall = state.totalAmount + action.item.price * action.item.amount

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const existingCartItem = state.items[existingCartItemIndex]
    let updateItems
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      }
      updateItems = [...state.items]

      updateItems[existingCartItemIndex] = updateItem
    } else {
      updateItems = [...state.items, action.item]
    }

    return {
      items: updateItems,
      totalAmount: totall,
    }
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    )
    const existingCartItem = state.items[existingCartItemIndex]

    const totall = state.totalAmount - existingCartItem.price
    let updateItems
    if (existingCartItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id)
    } else {
      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      }
    }

    return {
      items: updateItems,
      totalAmount: totall,
    }
  }
  return defaultState
}

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(reducer, defaultState)
  const addItemToCartHandler = (item) => {
    dispatch({ type: 'ADD', item: item })
  }

  const removeItemToCartHandler = (id) => {
    dispatch({ type: 'REMOVE', id: id })
  }

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }

  return (
    <cartContext.Provider value={cartcontext}>
      {props.children}
    </cartContext.Provider>
  )
}

export default CartProvider
