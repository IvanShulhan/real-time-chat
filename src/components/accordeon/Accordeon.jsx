import styles from "./styles.module.css";
import {useState} from "react";
import {twMerge} from "tailwind-merge";
import Expand from "src/assets/expand.svg?react"

export const Accordeon = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    const handleToggleOpen = () => {
        setOpen(prev => !prev);
    }

    return (
        <div className={twMerge(styles.accordeon, open && styles.open)}>
            <button className={styles.header} onClick={handleToggleOpen}>
                <h6>{title}</h6>
                <div className={styles.btn}>
                    <Expand />
                </div>
            </button>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}