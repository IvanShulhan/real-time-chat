import styles from "./styles.module.css";
import {useState} from "react";
import {Input} from "src/components/input/index.js";
import {Button} from "src/components/button/index.js";
import {ChatListItem} from "src/pages/main/components/list/components/addChatModal/components/chatListItem/index.js";

export const AddChatModal = () => {
    const [searchValue, setSearchValue] = useState("");

    const  handleSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className={styles.modal}>
            <div className={styles.searchBlock}>
                <div className={styles.inputWrapper}>
                    <Input
                        name="serchValue"
                        value={searchValue}
                        onChange={handleSearchValueChange}
                        placeholder="Username"
                    />
                </div>
                <div className={styles.btnWrapper}>
                    <Button onClick={() => {
                    }}>Search</Button>
                </div>
            </div>
            <div className={styles.chatList}>
                <ChatListItem user={{img: "src/assets/avatar.png", name: "John Dou"}}/>
            </div>
        </div>
    )
}