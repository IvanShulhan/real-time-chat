import styles from "./styles.module.css"
import { UserInfo } from "./components/userInfo/index.js";
import { Accordeon } from "src/components/accordeon/index.js";
import {Button} from "src/components/button/index.js";

export const Details = () => {
    return (
        <div className={styles.details}>
            <UserInfo />
            <div className={styles.accordeons}>
                <Accordeon title="Chat setting"><div>1</div></Accordeon>
                <Accordeon title="Privacy & help"><div>2</div></Accordeon>
                <Accordeon title="Shared photos"><div>3</div></Accordeon>
                <Accordeon title="Shared files"><div>3</div></Accordeon>
            </div>
            <Button reject={true}>Block user</Button>
        </div>
    )
}