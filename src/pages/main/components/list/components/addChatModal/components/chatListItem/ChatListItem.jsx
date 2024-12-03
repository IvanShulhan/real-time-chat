import styles from "./styles.module.css";
import {Button} from "src/components/button/index.js";


export const ChatListItem = ({ user }) => {
    return (
        <div className={styles.listItem}>
            <img className={styles.avatar} src={user.img} alt="user"/>
            <div className={styles.textBlock}>
                <div className={styles.name}>{user.name}</div>
            </div>
            <div className={styles.btnWrapper}>
                <Button onClick={() => {}}>Add</Button>
            </div>
        </div>
    )
}