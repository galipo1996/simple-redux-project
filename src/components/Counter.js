import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'
import { actionsCounter } from '../store/index'

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.show)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch({ type: actionsCounter.toogle })
  }
  const add5CounterHandler = () => {
    dispatch({ type: actionsCounter.increaseBy, payload: 5 })
  }
  const inc = () => {
    dispatch({ type: actionsCounter.inc })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={add5CounterHandler}>add 5</button>
      <button onClick={inc}>add 1</button>
    </main>
  )
}

export default Counter
