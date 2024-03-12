import React from "react";
import Styles from "./Navbar.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx"
import FeedbackButton from "../FeedbackButton/FeedbackButton.jsx";

function Navbar(){
    return (
        <>
            <nav className={Styles.navbar}>
                <h2>Qtify</h2>
                <SearchBar />
                <FeedbackButton />
            </nav>
        </>
    )
}

export default Navbar