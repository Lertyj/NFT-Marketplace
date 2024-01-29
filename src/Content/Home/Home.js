import React from "react";
import Discover from "./Discover/Discover";
import TopNFT from "./TopNFT/TopNFT";
import styles from './Home.module.css'
import TrendingBidsCards from "./NFT-auction/NFT-auction";
import Analytical from "./Analytical/Analytical";
import RecentActivity from "./Recent_activity/Recent_Activity";
import TopCreators from "./Top_Creators/Top_Creators";
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
        <div className={styles.recent_creators}>
            <RecentActivity/>
            <TopCreators/>
        </div>
        </>
    )
}

export default Home