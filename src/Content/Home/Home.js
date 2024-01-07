import React from "react";
import Discover from "./Discover/Discover";
import TopNFT from "./TopNFT/TopNFT";
import styles from './Home.module.css'
import TrendingBids from "./NFT-auction/NFT-auction";
function Home(){
    return(
        <>
        <div className={styles.cards}>
            <Discover/>
            <TopNFT/>
        </div>
        <div className={styles.trendingBids}>
            <TrendingBids/>
        </div>
        
        </>
    )
}

export default Home