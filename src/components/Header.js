import classes from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { actionsAth } from '../store/index'
const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin)
  const dispatch = useDispatch()
  const Logout = () => {
    dispatch({ type: actionsAth.loggedOut })
  }
  const navBar = (
    <nav>
      <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button onClick={Logout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogin && navBar}
    </header>
  )
}

export default Header
