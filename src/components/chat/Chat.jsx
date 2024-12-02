import "./styles.css"
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Content} from "./components/content";

export const Chat = () => {
    return <div className="chat"><Header /><Content /><Footer /></div>
}