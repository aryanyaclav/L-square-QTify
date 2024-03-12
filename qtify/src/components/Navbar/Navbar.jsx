import React from "react";
import Styles from "./Navbar.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx"
import FeedbackButton from "../FeedbackButton/FeedbackButton.jsx";
import Logo from "../Logo/Logo.jsx";

function Navbar(){
    return (
        <>
            <nav className={Styles.navbar}>
                <Logo />
                <SearchBar />
                <FeedbackButton />
            </nav>
        </>
    )
}

export default Navbar