import React from "react";
import styles from './Active_Bids.module.css';
import classes from './Bid_component.module.css';
import nft1 from '../../../icons/nft-third.jpg'
import nft2 from '../../../icons/nft-fourth.jpg'
import nft3 from '../../../icons/nft-fifth.jpg'
import nft4 from '../../../icons/nft.jpg'
import avatar from '../../../icons/avatar1.svg'
export function BidTitle(){
    return(
        <div className={classes.wrapper}>
            <div className={classes.checkbox}>
            <label className={classes.label}>
                <input type="checkbox" className={classes.real_checkbox_title}/>
                <span className={classes.custom_checkbox_title}>
                </span>
            </label>
                </div> 
            <div className={classes.item}>
                <h5>
                    Item List
                </h5>
            </div>
            <div className={classes.open_price}>
                <h5>
                Open Price
                </h5>
            </div>
            <div className={classes.your_offer}>
                <h5>
                Your Offer
                </h5>
            </div>
            <div className={classes.recent_offer}>
                <h5>
                Recent Offer
                </h5>
            </div>
            <div className={classes.time}>
                <h5>
                Time Left
                </h5>
            </div>
            <div className={classes.delete}>
                <h5>
                Action
                </h5>
            </div>
        </div>
    )
}
export function ActiveBid({nft,nft_name,nft_alt,nft_owner,open_price,your_offer,avatar,avatar_alt,recent_offer,time}){
    return(
        <div className={classes.wrapper}>
            <div className={classes.checkbox}>
            <label className={classes.label}>
                <input type="checkbox" className={classes.real_checkbox}/>
                <span className={classes.custom_checkbox}>
                </span>
            </label>
            </div> 
            <div className={classes.item}>
                <img src={nft} alt={nft_alt}/>
                <div className={classes.item_information}>
                    <h4>
                        {nft_name}
                    </h4>
                    <p>
                        {nft_owner}
                    </p>
                </div>
            </div>
            <div className={classes.open_price}>
                <p>{open_price}</p>
            </div>
            <div className={classes.your_offer}>
                <p>{your_offer}</p>
            </div>
            <div className={classes.recent_offer}>
                <img src={avatar} alt={avatar_alt}/>
                <div className={classes.recent_information}>
                    <p>{recent_offer}</p>
                </div>
            </div>
            <div className={classes.time}>
                <p>{time}</p>
            </div>
            <div className={classes.delete}>
                <span className={classes.cross}></span>
            </div>
        </div>
    )
}

function ActiveBids(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h3>
                    Active Bids
                </h3>
            </div>
            <div className={styles.content}>
                <div className={styles.bid_title}>
                    <BidTitle/>
                </div>
                <ul>
                    <li className={styles.item}>
                    <ActiveBid nft={nft1} nft_name="Cute Cube Cool" nft_owner="John Abraham" open_price="0.0025 ETH" your_offer="0.0025 ETH" avatar={avatar} recent_offer="0.0025 ETH" time="2 Hours 1 min 30s"/>
                    </li>
                    <li className={styles.item}>
                    <ActiveBid nft={nft2} nft_name="Liquid Wave" nft_owner="John Abraham" open_price="0.0025 ETH" your_offer="0.0025 ETH" avatar={avatar} recent_offer="0.0025 ETH" time="2 Hours 1 min 30s"/>
                    </li>
                    <li className={styles.item}>
                    <ActiveBid nft={nft1} nft_name="Cute Cube Cool" nft_owner="John Abraham" open_price="0.0025 ETH" your_offer="0.0025 ETH" avatar={avatar} recent_offer="0.0025 ETH" time="2 Hours 1 min 30s"/>
                    </li>
                    <li className={styles.item}>
                    <ActiveBid nft={nft3} nft_name="Liquid Wave" nft_owner="John Abraham" open_price="0.0025 ETH" your_offer="0.0025 ETH" avatar={avatar} recent_offer="0.0025 ETH" time="2 Hours 1 min 30s"/>
                    </li>
                    <li className={`${styles.item} ${styles.last}`}>
                    <ActiveBid nft={nft4} nft_name="Liquid Wave" nft_owner="John Abraham" open_price="0.0025 ETH" your_offer="0.0025 ETH" avatar={avatar} recent_offer="0.0025 ETH" time="2 Hours 1 min 30s"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ActiveBids;