import React from 'react'
import Styles from "./SearchBar.module.css"
import {ReactComponent as SearchIcon} from "../../assests/search-icon.svg"

export default function SearchBar() {
  return (
    <div className={Styles.search}>
        <input className={Styles.searchbox} placeholder='Search a album of your choice' />
        <button className={Styles.searchbutton}> <SearchIcon /> </button>
    </div>
  )
}
