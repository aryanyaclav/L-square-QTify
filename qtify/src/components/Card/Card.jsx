import Chip from '@mui/material/Chip';
import styles from "./Card.module.css"



export default function Card({ data }) {

    const {image, title, follows} = data
    const followsString = `${follows} follows`
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={image} alt="card" className={styles.cardImg} />
            </div>
            <div className={styles.chipContainer}>
                <Chip label={followsString} size="small" className={styles.chip} />
            </div>
            <div className={styles.nameContainer}>
                {title}
            </div>

        </div>
    )
}
