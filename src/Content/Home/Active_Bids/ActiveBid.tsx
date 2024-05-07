import React from "react";
import classes from "./Bid.module.css"

interface ActiveBidProps{
  nft:string,
  nft_name:string,
  nft_owner:string,
  open_price:string,
  your_offer:string,
  avatar:string,
  recent_offer:string,
  time:string;
}
export function ActiveBid({
  nft,
  nft_name,
  nft_owner,
  open_price,
  your_offer,
  avatar,
  recent_offer,
  time,
}:ActiveBidProps) {
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
        <img src={nft} alt="nft" />
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
        <img src={avatar} alt="avatar"/>
        <div className={classes.recent_information}>
          <p>{recent_offer}</p>
        </div>
      </td>
      <td className={classes.time}>
        <p>{time}</p>
      </td>
      <td className={classes.delete}>
        <button>
          <span className={classes.cross}></span>
        </button>
      </td>
    </tr>
  );
}