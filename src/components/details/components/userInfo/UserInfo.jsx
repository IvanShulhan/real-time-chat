import styles from "./styles.module.css";

export const UserInfo = () => {
    return (
        <div className={styles.userInfo}>
            <img src="src/assets/avatar.png" alt="user" className={styles.avatar}/>
            <h6 className={styles.name}>Jane Dou</h6>
            <p className={styles.description}>Some user description</p>
        </div>
    )
}