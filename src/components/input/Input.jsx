import {useState} from "react";
import styles from "./styles.module.css"
import Eye from "src/assets/eye.svg?react"
import EyeClosed from "src/assets/eye-closed.svg?react"
import {twMerge} from "tailwind-merge";

export const Input = ({ value, name, onChange, placeholder, type = "text", label = null }) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    const handleChangeVisibility = () => {
        setShowPassword(prev => !prev);
    }

    const currentType = isPassword && showPassword ? "text" : type;

    return (
        <label className={styles.label}>
            {label && <span className={styles.title}>{label}</span>}
            <input type={currentType} name={name} value={value} onChange={onChange} className={twMerge(styles.input, isPassword && styles.password)} placeholder={placeholder} />
            {isPassword && (
                <button className={styles.icon} onClick={handleChangeVisibility}>
                    {showPassword ? <Eye /> : <EyeClosed /> }
                </button>
            )}
        </label>
    )
}