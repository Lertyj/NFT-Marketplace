import styles from "./Top_Creators.module.css";
import classes from "./Creator_component.module.css";
import avatar from "../../../icons/avatar.svg";

export function CreatorComponent({ avatar, nickname, projects, value }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <img src={avatar} alt="avatar" />
        <div className={classes.information}>
          <h4>{nickname}</h4>
          <p>{projects}</p>
        </div>
      </div>
      <div className={classes.block_button}>
        <button
          onClick={() => {
            return false;
          }}
          type="button"
          className={classes.button}
        >
          {value}
        </button>
      </div>
    </div>
  );
}

function TopCreators() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Top Creators</h3>
      </div>
      <div className={styles.content}>
        <ul>
          <li>
            <CreatorComponent
              avatar={avatar}
              nickname="Papaya"
              projects="60 items"
              value="Follow"
            />
          </li>
          <li>
            <CreatorComponent
              avatar={avatar}
              nickname="Papaya"
              projects="60 items"
              value="Follow"
            />
          </li>
          <li>
            <CreatorComponent
              avatar={avatar}
              nickname="Papaya"
              projects="60 items"
              value="Follow"
            />
          </li>
          <li>
            <CreatorComponent
              avatar={avatar}
              nickname="Papaya"
              projects="60 items"
              value="Follow"
            />
          </li>
        </ul>
        <ul>
          <li>
            <CreatorComponent
              avatar={avatar}
              nickname="Papaya"
              projects="60 items"
              value="Follow"
            />
          </li>
          <li>
            <CreatorComponent
              avatar={avatar}
              nickname="Papaya"
              projects="60 items"
              value="Follow"
            />
          </li>
          <li>
            <CreatorComponent
              avatar={avatar}
              nickname="Papaya"
              projects="60 items"
              value="Follow"
            />
          </li>
          <li>
            <CreatorComponent
              avatar={avatar}
              nickname="Papaya"
              projects="60 items"
              value="Follow"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopCreators;
