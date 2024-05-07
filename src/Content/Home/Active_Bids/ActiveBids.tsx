import React from "react";
import styles from "./Active_Bids.module.css";
import { bidsData } from "./Active_Bids_data";
import { BidTitle } from "./BidTitle";
import { ActiveBid } from "./ActiveBid";


interface ActiveBidsProps{
  button?: React.ReactNode;
}
interface BidProps{
  nft: string,
  nft_name: string,
  nft_owner: string,
  open_price: string,
  your_offer: string,
  avatar: string,
  recent_offer: string,
  time: string,
}

function ActiveBids({ button }: ActiveBidsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Active Bids</h3>
        <div className={styles.button}>{button}</div>
      </div>
      <div className={styles.content}>
        <table className={styles.table_wrapper}>
          <tbody>
            <BidTitle />
            {bidsData.map((bid:BidProps, index:number) => (
              <ActiveBid key={index} {...bid} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ActiveBids;
