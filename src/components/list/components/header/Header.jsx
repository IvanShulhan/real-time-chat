import "./styles.css";
import {ActionButton} from "src/components/actionButton";
import More from "src/assets/more.svg?react"
import Video from "src/assets/video.svg?react"
import Edit from "src/assets/edit.svg?react"

export const Header = () => {
    return (
        <div className="header">
            <div className="user">
                <div className="user-avatar">
                    <img className="user-avatar-img" src="src/assets/avatar.png" alt="user" />
                </div>
                <div className="user-name">John Dou</div>
            </div>
            <div className="actions">
                <ActionButton onClick={() => {}}>
                    <More />
                </ActionButton>
                <ActionButton onClick={() => {
                }}>
                    <Video />
                </ActionButton>
                <ActionButton onClick={() => {
                }}>
                    <Edit />
                </ActionButton>
            </div>
        </div>
    )
}