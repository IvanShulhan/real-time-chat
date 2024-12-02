import "./styles.css"
import {Header} from "./components/header/index.js";
import {Footer} from "./components/footer/index.js";
import {Content} from "./components/content/index.js";

export const Chat = () => {
    return <div className="chat"><Header /><Content /><Footer /></div>
}