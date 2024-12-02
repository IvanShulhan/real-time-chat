import styles from "./styles.module.css"
import {LoginSection} from "./components/loginSection";
import {RegisterSection} from "src/pages/login/components/registrationSection/index.js";

export const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <LoginSection />
            </div>
            <div className={styles.divider}/>
            <div className={styles.side}>
                <RegisterSection />
            </div>
        </div>
    )
}