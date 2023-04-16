import React, { useRef } from 'react'
import classes from './MealForm.module.css'
import Input from '../../UI/Input'

const MealForm = (props) => {
  const inputRef = useRef()

  const AddItem = (e) => {
    e.preventDefault()
    const valueNum = inputRef.current.value * 1
    props.onAddToCart(valueNum)
  }
  return (
    <form className={classes.form}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={AddItem}>+ Add </button>
    </form>
  )
}

export default MealForm
