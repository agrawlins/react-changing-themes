import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
    const {color} = useContext(ThemeContext)
    return(
        <header className={`header-${color}`}>
            <h1>CHANGING THEMES USING CONTEXT</h1>
        </header>
    )
}

export default Header;