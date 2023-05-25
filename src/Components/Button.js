import React, { useContext } from 'react';
import {ThemeContext} from './ThemeContext';

const Button = (props) => {
    const {color, toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <button className={`button-${color}`} onClick={toggleTheme}>SWITCH TO {prevColor => prevColor === "dark" ? "light" : "dark"} MODE</button>
            {/* <select className={`button-${color}`}>
                <option value="light">Light Theme</option>
                <option value="dark">Dark Theme</option>
            </select>*/}
        </div>
    );
}

export default Button;