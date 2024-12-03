import styles from "./styles.module.css";
import { ActionButton } from "src/components/actionButton/index.js";
import Picture from "src/assets/picture.svg?react"
import Camera from "src/assets/camera.svg?react"
import Microphone from "src/assets/microphone.svg?react"
import Emoji from "src/assets/emoji.svg?react"
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import {Button} from "src/components/button/index.js";

export const Footer = () => {
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    }

    const handleToggleOpen = () => {
        setOpen((prev) => !prev);
    }

    const handleClickEmoji = (event) => {
        setMessage((prev) => prev + event.emoji);
    }

    return (
        <div className={styles.footer}>
            <div className={styles.actions}>
                <ActionButton className="lg-imgs" onClick={() => {
                }}>
                    <Picture/>
                </ActionButton>
                <ActionButton className="lg-imgs" onClick={() => {
                }}>
                    <Camera/>
                </ActionButton>
                <ActionButton className="lg-imgs" onClick={() => {
                }}>
                    <Microphone/>
                </ActionButton>
            </div>
            <div className={styles.search}>
                <input type="text" onChange={handleChangeMessage} value={message} placeholder="Type a message..."/>
            </div>
            <div className={styles.actions}>
                <ActionButton className="lg-imgs relative" onClick={handleToggleOpen}>
                    <Emoji/>
                    <div className={styles.emoji}>
                        <EmojiPicker open={open} setOpen={handleToggleOpen} onEmojiClick={handleClickEmoji} />
                    </div>
                </ActionButton>
                <div className={styles.btnWrapper}>
                    <Button onClick={() => {}}>Send</Button>
                </div>

            </div>
        </div>
    )
}