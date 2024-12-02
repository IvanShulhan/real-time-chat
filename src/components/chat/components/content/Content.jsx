import styles from "./styles.module.css";

export const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.messages}>
                <div className={styles.message}>
                    <img src="src/assets/avatar.png" alt="user" className={styles.avatar}/>
                    <div className={styles.textBlock}>
                        <img src="src/assets/contentImage.jpg" alt="user" className={styles.contentMessage}/>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using Content here
                        </p>
                        <span>5 mins ago</span>
                    </div>
                </div>
                <div className={styles.messageOwn}>
                    <div className={styles.textBlock}>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using Content here
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking
                        </p>
                        <span>4 mins ago</span>
                    </div>
                </div>
                <div className={styles.message}>
                    <img src="src/assets/avatar.png" alt="user" className={styles.avatar}/>
                    <div className={styles.textBlock}>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using Content here
                        </p>
                        <span>2 mins ago</span>
                    </div>
                </div>
                <div className={styles.messageOwn}>
                    <div className={styles.textBlock}>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}