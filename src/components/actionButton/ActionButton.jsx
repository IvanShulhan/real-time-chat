import "./styles.css"
import {twMerge} from "tailwind-merge";

export const ActionButton = ({ onClick, children, className }) => (
    <button onClick={onClick} className={twMerge("action-btn", className)}>{children}</button>
)