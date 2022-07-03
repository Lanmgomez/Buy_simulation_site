import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Navbar = () => {
  return (
    <nav className={styles.header}>
        <i className="bi bi-bag-heart-fill"></i>
        <div>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/option">Option</Link>
        </div>
    </nav>
  )
}

export default Navbar