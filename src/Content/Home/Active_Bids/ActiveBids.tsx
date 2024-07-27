import React, { useEffect, useRef, useState } from "react";
import styles from "./Active_Bids.module.css";
import { bidsData } from "./Active_Bids_data";
import { BidTitle } from "./BidTitle";
import { ActiveBid } from "./ActiveBid";

interface ActiveBidsProps {
  button?: React.ReactNode;
}
interface BidProps {
  nft: string;
  nft_name: string;
  nft_owner: string;
  open_price: string;
  your_offer: string;
  avatar: string;
  recent_offer: string;
  time: string;
}

function ActiveBids({ button }: ActiveBidsProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setScrollWidth(
        contentRef.current.scrollWidth - contentRef.current.clientWidth
      );
    }
  }, [bidsData]); 

  const handleScroll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (contentRef.current) {
      const scrollValue = Number(event.target.value);
      contentRef.current.scrollLeft = scrollValue;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Active Bids</h3>
        <div className={styles.button}>{button}</div>
      </div>
      <div className={styles.content} ref={contentRef}>
        <table className={styles.table_wrapper}>
          <tbody>
            <BidTitle />
            {bidsData.map((bid, index) => (
              <ActiveBid key={index} {...bid} />
            ))}
          </tbody>
        </table>
      </div>
      <input
        type="range"
        min="0"
        max={scrollWidth}
        value={contentRef.current ? contentRef.current.scrollLeft : 0}
        onChange={handleScroll}
        className={styles.slider}
      />
    </div>
  );
}
export default ActiveBids;
