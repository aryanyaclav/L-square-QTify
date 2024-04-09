import React , {useState, useEffect} from 'react'
import axios from 'axios'
import styles from "./Section.module.css"
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import { CircularProgress } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { fetchGenres } from '../../api/api'
import Filters from '../Filters/Filters'

export default function Section({title, data, type, filterSource}) {

  const [collapsed, setCollapsed] = useState(true)
  const [filters, setFilters] = useState([{key : "all", label: "All"}])
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0)

  const handleCollapseClick = () => {
    setCollapsed((prevState) => !prevState)
  }

  const handleTabChange = (event, newValue) => {
    setSelectedFilterIndex(newValue)
  }


  useEffect(() => {
    if(filterSource){
      filterSource().then((response) => {
          const {data} = response
          setFilters([...filters, ...data])
      })
    }
  }, [])

  const showFilters = filters.length > 1
  const cardToRender = data.filter((card) => 
  showFilters && selectedFilterIndex !== 0 ? card.genre.key === filters[selectedFilterIndex].key : card)

  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
        <div className={styles.contentHeader}>
            <div className={styles.albumText}>{title}</div>
            {type==="albums" ? 
            <div className={styles.buttonContainer} onClick ={handleCollapseClick}>{collapsed ? "Show All" : "Collapse"}</div>
            :<></>}

        </div>
        {
          showFilters && (
            <div className={styles.filterWrapper}>
              <Filters 
                filters = {filters}
                selectedFilterIndex = {selectedFilterIndex}
                setSelectedFilterIndex = {setSelectedFilterIndex}
              />
            </div>
          )
        }
        
        {collapsed ? <div><Carousel data={cardToRender} renderComponent={(data) => <Card data={data} type={type}/>}/></div> :
        <div className={styles.contentSection}>
            {cardToRender.length > 0 ?
              cardToRender.map( album => 
                <Card data={album} type={type}/>
             ):
             <CircularProgress />}
        </div>
        }
        
    </div>
    </div>
    
  )
}
