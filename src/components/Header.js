import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <i className="bi bi-bag-heart-fill"></i>
        <div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Options</li>
            </ul>
        </div>
    </div>
  )
}

export default Header