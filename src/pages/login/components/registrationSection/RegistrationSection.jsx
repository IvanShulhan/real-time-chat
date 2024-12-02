import {useState} from "react";
import {Input} from "src/components/input";
import styles from "./styles.module.css"

export const RegisterSection = () => {
    const [registerData, setRegisterData] = useState({
        image: null,
        username: "",
        email: "",
        password: "",
    })

    const handleChangeLoginData = (event) => {
        setRegisterData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (
        <div className={styles.container}>
            <h5>Create anAccount,</h5>
            <div className={styles.content}>
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={registerData.username}
                    onChange={handleChangeLoginData}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={registerData.email}
                    onChange={handleChangeLoginData}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleChangeLoginData}
                />
            </div>
        </div>
    )
}