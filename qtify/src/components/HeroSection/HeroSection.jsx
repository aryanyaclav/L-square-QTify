import React from 'react'
import styles from "./HeroSection.module.css"
import HeroText from './HeroText.jsx'
import HeroImage from './HeroImage.jsx'

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
        <HeroText />
        <HeroImage />
    </div>
  )
}
