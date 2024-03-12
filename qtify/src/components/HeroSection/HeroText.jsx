import React from 'react'
import styles from "./HeroText.module.css"

export default function HeroText() {
    return (
        <div className={styles.heroText}>
            <div>
                100 Thousand Songs, ad-free
            </div>
            <div>
                Over thousands podcast episodes
            </div>
        </div>
    )
}
