import React from "react";
import styles from "./Discover.module.css"
function Discover(){
    return(
        <>
        <div className={styles.discover}>
            <div className={styles.content}>
            <h2>Discover, Collect, Sell and Create your NFT</h2>
            <p>Digital marketplace for crypto collectibles and non fungable tokens</p>
            <div className={styles.buttons}>
                <button onClick={() => {return false}} type="button" className={styles.explore}>Explore</button> 
                <button onClick={() => {return false}} type="button" className={styles.create}>Create</button> 
            </div>
            </div>
        </div>
        </>
    )
}

export default Discover;