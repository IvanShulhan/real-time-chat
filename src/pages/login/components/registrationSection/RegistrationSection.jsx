import {useState} from "react";
import {Input} from "src/components/input";
import styles from "../../styles.module.css"

export const RegisterSection = () => {
    const [registerData, setRegisterData] = useState({
        image: {
            file: null,
            url: "",
        },
        username: "",
        email: "",
        password: "",
    })

    const handleChangeLoginData = (event) => {
        setRegisterData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleChangeImage = (event) => {
        const file = event.target.files?.[0];

        if (file) {
            setRegisterData((prev) => ({
                ...prev,
                image: {
                    file,
                    url: URL.createObjectURL(file),
                },
            }));
        }
    };


    return (
        <div className={styles.sideContainer}>
            <h5>Create an Account</h5>
            <div className={styles.content}>
                <label className={styles.imageLabel}>
                    <img className={styles.image} src={registerData.image.url || "src/assets/avatar.png"} alt="avatar" />
                    <input type="file" style={{ display: "none" }} onChange={handleChangeImage} />
                    <span>Upload an image</span>
                </label>
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
                <button className={styles.submitBtn}>Sign Up</button>
            </div>
        </div>
    )
}