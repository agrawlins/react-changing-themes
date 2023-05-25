import React, {useContext} from "react";
import { ThemeContextProvider } from "./Components/ThemeContext";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;