import React , {useState, useEffect} from 'react'
import axios from 'axios'
import styles from "./Section.module.css"
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import { CircularProgress } from '@mui/material'

export default function Section({name, data}) {

  const [collapsed, setCollapsed] = useState(true)

  const handleCollapseClick = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
        <div className={styles.contentHeader}>
            <div className={styles.albumText}>{name==="top"? "Top Albums" : "New Albums"}</div>
            <div className={styles.buttonContainer} onClick ={handleCollapseClick}>{collapsed ? "Show All" : "Collapse"}</div>

        </div>
        {collapsed ? <div><Carousel data={data} renderComponent={(data) => <Card data={data} />}/></div> :
        <div className={styles.contentSection}>
            {data.length > 0 ?
             data.map( album => 
                <Card data={album}/>
             ):
             <CircularProgress />}
        </div>
        }
        
    </div>
    </div>
    
  )
}
