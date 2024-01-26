import React from "react";
import Discover from "./Discover/Discover";
import TopNFT from "./TopNFT/TopNFT";
import styles from './Home.module.css'
import TrendingBidsCards from "./NFT-auction/NFT-auction";
import Analytical from "./Analytical/Analytical";
function Home(){
    return(
        <>
        <div className={styles.cards}>
            <Discover/>
            <TopNFT/>
        </div>
        <div className={styles.trendingBids}>
            <TrendingBidsCards/>
        </div>
        <div className={styles.analytical}>
            <Analytical/>
        </div>

        </>
    )
}

export default Home