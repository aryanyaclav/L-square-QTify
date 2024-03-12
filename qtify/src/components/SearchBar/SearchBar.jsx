import React from 'react'
import Styles from "./SearchBar.module.css"

export default function SearchBar() {
  return (
    <div className={Styles.search}>
        <input className={Styles.searchbox} placeholder='Search a album of your choice' />
        <button className={Styles.searchbutton}> search </button>

    </div>
  )
}
