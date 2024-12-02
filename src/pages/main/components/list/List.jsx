import "./styles.css"
import {Header} from "./components/header/index.js";
import {SearchBar} from "./components/searchBar/index.js";
import {ChatList} from "./components/chatList/index.js";

export const List = () => {
    return <div className="list">
        <Header />
        <SearchBar />
        <ChatList />
    </div>
}