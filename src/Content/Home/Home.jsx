import React from "react";
import Discover from "./Discover/Discover";
import TopNFT from "./TopNFT/TopNFT";
import styles from "./Home.module.css";
import Analytical from "./Analytical/Analytical";
import RecentActivity from "./Recent_Activity/Recent_Activity";
import TopCreators from "./Top_Creators/Top_Creators";
import ActiveBids from "./Active_Bids/Active_Bids";
import NFTAuction from "./NFT-auction/NFT-auction";
function Home() {
  return (
    <>
      <div className={styles.cards}>
        <Discover />
        <TopNFT />
      </div>
      <div className={styles.nft_auction}>
        <NFTAuction title="Trending Bids" />
      </div>
      <div className={styles.analytical}>
        <Analytical />
      </div>
      <div className={styles.recent_creators}>
        <RecentActivity />
        <TopCreators />
      </div>
      <div className={styles.active_bids}>
        <ActiveBids />
      </div>
    </>
  );
}

export default Home;
