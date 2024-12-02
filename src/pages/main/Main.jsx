import { List } from "src/pages/main/components/list/index.js";
import { Chat } from "src/pages/main/components/chat/index.js";
import { Details } from "src/pages/main/components/details/index.js";

export const MainPage = () => {
    return (
        <>
            <List />
            <Chat />
            <Details />
        </>
    )
}