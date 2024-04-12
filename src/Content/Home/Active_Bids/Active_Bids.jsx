import React from "react";
import styles from "./Active_Bids.module.css";
import classes from "./Bid_component.module.css";
import nft1 from "../../../icons/nft-third.jpg";
import nft2 from "../../../icons/nft-fourth.jpg";
import nft3 from "../../../icons/nft-fifth.jpg";
import nft4 from "../../../icons/nft.jpg";
import avatar from "../../../icons/avatar1.svg";
export function BidTitle() {
  return (
    <tr className={`${classes.wrapper} ${classes.bids_title}`}>
      <th className={classes.checkbox}>
        <label className={classes.label}>
          <input type="checkbox" className={classes.real_checkbox_title} />
          <span className={classes.custom_checkbox_title}></span>
        </label>
      </th>
      <th className={classes.item_bid}>
        <h5>Item List</h5>
      </th>
      <th className={classes.open_price}>
        <h5>Open Price</h5>
      </th>
      <th className={classes.your_offer}>
        <h5>Your Offer</h5>
      </th>
      <th className={classes.recent_offer}>
        <h5>Recent Offer</h5>
      </th>
      <th className={classes.time}>
        <h5>Time Left</h5>
      </th>
      <th className={classes.delete}>
        <h5>Action</h5>
      </th>
    </tr>
  );
}
export function ActiveBid({
  nft,
  nft_name,
  nft_alt,
  nft_owner,
  open_price,
  your_offer,
  avatar,
  avatar_alt,
  recent_offer,
  time,
}) {
  return (
    <tr className={`${classes.wrapper} ${classes.item}`}>
      <td className={classes.checkbox}>
        <button>
          <label className={classes.label}>
            <input type="checkbox" className={classes.real_checkbox} />
            <span className={classes.custom_checkbox}></span>
          </label>
        </button>
      </td>
      <td className={classes.item_bid}>
        <img src={nft} alt={nft_alt} />
        <div className={classes.item_information}>
          <h4>{nft_name}</h4>
          <p>{nft_owner}</p>
        </div>
      </td>
      <td className={classes.open_price}>
        <p>{open_price}</p>
      </td>
      <td className={classes.your_offer}>
        <p>{your_offer}</p>
      </td>
      <td className={classes.recent_offer}>
        <img src={avatar} alt={avatar_alt} />
        <td className={classes.recent_information}>
          <p>{recent_offer}</p>
        </td>
      </td>
      <td className={classes.time}>
        <p>{time}</p>
      </td>
      <button className={classes.delete}>
        <span className={classes.cross}></span>
      </button>
    </tr>
  );
}

function ActiveBids() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Active Bids</h3>
      </div>
      <div className={styles.content}>
        <table className={styles.table_wrapper}>
          <BidTitle />
          <ActiveBid
            nft={nft1}
            nft_name="Cute Cube Cool"
            nft_owner="John Abraham"
            open_price="0.0025 ETH"
            your_offer="0.0025 ETH"
            avatar={avatar}
            recent_offer="0.0025 ETH"
            time="2 Hours 1 min 30s"
          />
          <ActiveBid
            nft={nft2}
            nft_name="Liquid Wave"
            nft_owner="John Abraham"
            open_price="0.0025 ETH"
            your_offer="0.0025 ETH"
            avatar={avatar}
            recent_offer="0.0025 ETH"
            time="2 Hours 1 min 30s"
          />
          <ActiveBid
            nft={nft1}
            nft_name="Cute Cube Cool"
            nft_owner="John Abraham"
            open_price="0.0025 ETH"
            your_offer="0.0025 ETH"
            avatar={avatar}
            recent_offer="0.0025 ETH"
            time="2 Hours 1 min 30s"
          />
          <ActiveBid
            nft={nft3}
            nft_name="Liquid Wave"
            nft_owner="John Abraham"
            open_price="0.0025 ETH"
            your_offer="0.0025 ETH"
            avatar={avatar}
            recent_offer="0.0025 ETH"
            time="2 Hours 1 min 30s"
          />
          <ActiveBid
            nft={nft4}
            nft_name="Liquid Wave"
            nft_owner="John Abraham"
            open_price="0.0025 ETH"
            your_offer="0.0025 ETH"
            avatar={avatar}
            recent_offer="0.0025 ETH"
            time="2 Hours 1 min 30s"
          />
        </table>
      </div>
    </div>
  );
}
export default ActiveBids;
