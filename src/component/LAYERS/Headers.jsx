import React from 'react'
import imageHeader from '../../assets/meals.jpg'
import classes from './Header.module.css'
import Btn from './HeaderCartBtn'

const Headers = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <Btn OpenCart={props.OpenCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={imageHeader} alt='header_Image' />
      </div>
    </React.Fragment>
  )
}

export default Headers
