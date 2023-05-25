import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
    const {color} = useContext(ThemeContext)
    return(
        <footer className={`footer-${color}`}>
            Copyright © 2022 Adam G. Rawlins. All Other Rights Reserved.
        </footer>
    )
}

export default Footer;