import React, { Fragment } from 'react'
import AvaialableMeals from './AvaialableMeals'
import MealsSummary from './MealsSummary'

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaialableMeals />
    </Fragment>
  )
}

export default Meals
