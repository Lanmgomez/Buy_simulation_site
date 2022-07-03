import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p>Site project by: Islan Gomes.</p>
        <p>All rights reserved. <span> &copy; </span> </p>
        <p>Follow us on social medias</p>
            <div>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-linkedin"></i>
            </div>
    </div>
  )
}

export default Footer