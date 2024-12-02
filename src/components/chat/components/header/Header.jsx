import "./styles.css";
import { ActionButton } from "src/components/actionButton";
import Phone from "src/assets/phone.svg?react"
import Video from "src/assets/video.svg?react"
import Info from "src/assets/info.svg?react"

export const Header = () => {
    return (
        <div className="header">
            <div className="user">
                <div className="avatar">
                    <img className="avatar-img" src="src/assets/avatar.png" alt="user" />
                </div>
                <div className="user-info">
                    <div className="user-name">John Dou</div>
                    <p className="user-description">Lorem ipsum dolor amet...</p>
                </div>
            </div>
            <div className="actions">
                <ActionButton className="lg-imgs" onClick={() => {}}>
                    <Phone />
                </ActionButton>
                <ActionButton className="lg-imgs" onClick={() => {
                }}>
                    <Video />
                </ActionButton>
                <ActionButton className="lg-imgs" onClick={() => {
                }}>
                    <Info />
                </ActionButton>
            </div>
        </div>
    )
}