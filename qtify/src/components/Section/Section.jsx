import React , {useState, useEffect} from 'react'
import axios from 'axios'
import styles from "./Section.module.css"
import Card from '../Card/Card'

export default function Section({name}) {

  const [albumData, setAlbumData] = useState([])

  const fetchAlbumData = async () => {
    console.log("fetch data enter")
        const api = "https://qtify-backend-labs.crio.do/albums/top"
        try{
            const response = await axios.get(api)
            console.log(response)
            if(response.status === 200){
                const data = await response.data
                setAlbumData(data)
                return data
            }
        }catch(err){
            console.log(`errrorrr ---> ${err}`)
        }
  }

  useEffect(() => {
    fetchAlbumData()
  }, [])

  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
        <div className={styles.contentHeader}>
            <div className={styles.albumText}>{name}</div>
            <div className={styles.buttonContainer}>Collapse</div>

        </div>
        <div className={styles.contentSection}>
            {albumData.length > 0 ?
             albumData.map( album => {
                return (<Card data={album}/>)
             }):
             <></>}
        </div>
    </div>
    </div>
    
  )
}
