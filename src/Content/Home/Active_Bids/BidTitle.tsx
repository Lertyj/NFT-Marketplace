import React from "react";
import classes from "./Bid.module.css"
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