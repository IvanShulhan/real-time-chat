import "./styles.css";
import Plus from "src/assets/plus.svg?react"
import Minus from "src/assets/minus.svg?react"
import Search from "src/assets/search.svg?react"
import {useState} from "react";
import {AddChatModal} from "../addChatModal";

export const SearchBar = () => {
    const [addMode, setEddMode] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleChangeAddMode = () => {
        setEddMode(prev => !prev);
    }

    const handleChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="search-bar">
            <div className="search">
                <Search className="search-icon" />
                <input type="text" onChange={handleChangeSearchValue} value={searchValue} placeholder="Search" />
            </div>
            <button onClick={handleChangeAddMode} className="add-btn">
                {addMode ? <Minus /> : <Plus />}
            </button>
            {addMode && <AddChatModal/>}

        </div>
    )
}