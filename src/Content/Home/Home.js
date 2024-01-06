import React from "react";
import Discover from "./Discover/Discover";
import TopNFT from "./TopNFT/TopNFT";
import styles from './Home.module.css'
function Home(){
    return(
        <>
        <div className={styles.cards}>
            <Discover/>
            <TopNFT/>
        </div>
        
        </>
    )
}

export default Home