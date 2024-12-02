import "./styles.css"

export const ActionButton = ({ onClick, children }) => (
    <button onClick={onClick} className="action-btn">{children}</button>
)