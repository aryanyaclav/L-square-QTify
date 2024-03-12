import React from 'react'
import headphoneImage from "../../assests/headphone.png"
import styles from "./HeroImage.module.css"

export default function HeroImage() {
  return (
    <img className={styles.heroImg} src={headphoneImage} alt="Headphone"/>
  )
}
