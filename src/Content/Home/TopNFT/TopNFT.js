import React from "react";
import styles from "./TopNFT.module.css"
import avatar from "../../../icons/avatar.svg";
import NFT from "../../../icons/nft-second.jpg";
function TopNFT(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.nft}>
                    <img className={styles.img}src={NFT} alt="NFT"/>
                </div>
                    <div className={styles.text}>
                        <div>
                            <p className={styles.profile}><img className={styles.avatar} src={avatar} alt="avatar"/><span className={styles.profile_text}>John Abraham</span> <div className={styles.online}></div></p>
                        </div>
                        <div className={styles.information}>
                            <div className={styles.token}>
                                <h3>Birghten LQ</h3>
                                <div className={styles.token_information}>
                                    <div className={styles.time}>
                                        <p>Auction time</p>
                                        <p className={styles.third_color}>3h 1m 50s</p>
                                    </div>
                                    <div className={styles.bid}>
                                        <p>Current Bid : <span className={styles.second_color}>0.05 ETH</span></p>
                                        <p className={styles.third_color}>0.15 ETH</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => {return false}} type="button" className={`${styles.place} ${styles.button}`}>Place a Bid</button>
                            <button onClick={() => {return false}} type="button" className={`${styles.details} ${styles.button}`}>Details</button>
                        </div>
                </div>
                
                    
            </div>
        </div>
    )
}

export default TopNFT