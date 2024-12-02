import "./styles.css";
import {ChatListItem} from "../chatListItem/index.js";

const mockUsers = [
     {
         id: 1,
         name: "John Doe",
         img: "src/assets/avatar.png",
         message: "Hello"
     },
    {
        id: 2,
        name: "Jane Doe",
        img: "src/assets/avatar.png",
        message: "Hello John"
    },
    {
        id: 3,
        name: "Adam smith",
        img: "src/assets/avatar.png",
        message: "What's up mate)"
    },
]

export const ChatList = () => {
    return (
        <div className="chat-list">
            {mockUsers.map((user) => (
                <ChatListItem user={user} key={user.id} />
            ))}
        </div>
    )
}