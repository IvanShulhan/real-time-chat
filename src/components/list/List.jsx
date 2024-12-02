import "./styles.css"
import {Header} from "./components/header";
import {SearchBar} from "./components/searchBar";
import {ChatList} from "./components/chatList";

export const List = () => {
    return <div className="list">
        <Header />
        <SearchBar />
        <ChatList />
    </div>
}