import { Fragment } from 'react'
import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import Profile from './components/UserProfile'
import { useSelector } from 'react-redux'
function App() {
  const isLogin = useSelector((state) => state.auth.isLogin)
  return (
    <Fragment>
      <Header />
      {isLogin ? <Profile /> : <Auth />}
      <Counter />
    </Fragment>
  )
}

export default App
