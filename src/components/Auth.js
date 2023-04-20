import classes from './Auth.module.css'
import { useDispatch } from 'react-redux'
import { actionsAth } from '../store/index'

const Auth = () => {
  const dispatch = useDispatch()
  const login = (e) => {
    e.preventDefault()
    dispatch({ type: actionsAth.loggedIn })
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={login}>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
