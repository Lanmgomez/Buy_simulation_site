import React from 'react'
import styles from './Main.module.css'
import bag01 from '../img/backpack01.png'
import bag02 from '../img/backpack02.png'
import bag03 from '../img/backpack03.png'

const Main = () => {
  return (
    <div className={styles.main}>
        <h1>Backpacks</h1>
            <div className={styles.products}>
                <div className={styles.div01}>
                    <img src={bag01} alt="backpack01" />
                        <label>
                            <h2>Backpack Red</h2>
                                <h3>$ 45,00.</h3>
                                <p>Beautifull item red. Enjoy it!</p>
                                <input type="submit" value="Buy"/>
                        </label>
                </div>
                <div className={styles.div02}>
                    <img src={bag02} alt="backpack02" />
                    <label>
                            <h2>Backpack Black</h2>
                                <h3>$ 45,00.</h3>
                                <p>Beautifull item gray and black. Enjoy it!</p>
                                <input type="submit" value="Buy"/>
                        </label>
                </div>
                <div className={styles.div03}>
                    <img src={bag03} alt="backpack03" />
                    <label>
                            <h2>Backpack Gray</h2>
                                <h3>$ 45,00.</h3>
                                <p>Beautifull item gray. Enjoy it!</p>
                                <input type="submit" value="Buy"/>
                        </label>
                </div>
            </div>
    </div>
  )
}

export default Main