import "./styles.css";


export const ChatListItem = ({ user }) => {
    return (
        <div className="chat-list-item">
            <div className="avatar">
                <img className="avatar-img" src={user.img} alt="user"/>
            </div>
            <div className="text-block">
                <div className="user">{user.name}</div>
                <p className="message">{user.message}</p>
            </div>
        </div>
    )
}