import React from "react"
import classes from "./Card.module.css"
interface CardProps{
  img: string,
  number: string,
  industry: string,
  percent?: string,
  classnameimg?:string,
  classnamep?:string;
}
export function Card({
  img,
  number,
  industry,
  percent,
  classnameimg,
  classnamep,
}: CardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <div className={classes.information}>
          <div className={`${classes.img} ${classnameimg ? classes[classnameimg] : ''}`}>
            <img src={img} alt={industry} />
          </div>
          <div className={classes.text}>
            <h2>{number}</h2>
            <p>{industry}</p>
          </div>
        </div>
        <div className={`${classnamep ? classes[classnamep] : ''}`}>
          <p>{percent}</p>
        </div>
      </div>
    </div>
  );
}