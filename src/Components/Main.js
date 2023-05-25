import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";


const Main = () => {
    const {color} = useContext(ThemeContext)
    return(
        <div className={`main-${color}`}>
            <h1>This text is now in {color} mode. However, when you push that little button down there...</h1>
            <Button/>
        </div>
    )
}

export default Main;