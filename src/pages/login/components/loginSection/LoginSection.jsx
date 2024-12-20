import styles from "../../styles.module.css"
import {useState} from "react";
import {Input} from "src/components/input";
import {Button} from "src/components/button";

export const LoginSection = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const handleChangeLoginData = (event) => {
        setLoginData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (
        <div className={styles.sideContainer}>
            <h5>Welcome back,</h5>
            <div className={styles.content}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleChangeLoginData}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChangeLoginData}
                />
                <Button onClick={() => {}}>Sign In</Button>
            </div>
        </div>
    )
}