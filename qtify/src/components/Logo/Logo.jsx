import React from 'react'
import logo from "../../assests/qtify-logo.png"
import styles from "./Logo.module.css"

export default function Logo() {
  return (
    <>
        <img className={styles.logo} src ={logo} alt="Qtify"></img>
    </>
  )
}
