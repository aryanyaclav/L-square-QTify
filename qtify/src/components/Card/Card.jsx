import Chip from '@mui/material/Chip';
import styles from "./Card.module.css"



export default function Card({ data , type}) {

    
    if(type === "albums"){
        const {image, title, follows} = data
        const chipString = `${follows} follows`

        return (
            <div className={styles.cardContainer}>
                <div className={styles.imgContainer}>
                    <img src={image} alt="card" className={styles.cardImg} />
                </div>
                <div className={styles.chipContainer}>
                    <Chip label={chipString} size="small" className={styles.chip} />
                </div>
                <div className={styles.nameContainer}>
                    {title}
                </div>
    
            </div>)
    }
    else{
        const {image , title, likes} = data
        const chipStringSong = `${likes} likes`

        return (
            <div className={styles.cardContainer}>
                <div className={styles.imgContainer}>
                    <img src={image} alt="card" className={styles.cardImg} />
                </div>
                <div className={styles.chipContainer}>
                    <Chip label={chipStringSong} size="small" className={styles.chip} />
                </div>
                <div className={styles.nameContainer}>
                    {title}
                </div>
    
            </div>)
    }
}
