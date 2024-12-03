import styles from "./styles.module.css"
import {twMerge} from "tailwind-merge";

export const Button = ({ onClick, children, reject = false, className = "" }) => (
    <button onClick={onClick} className={twMerge(styles.button, className, reject && styles.reject )}>{children}</button>
)