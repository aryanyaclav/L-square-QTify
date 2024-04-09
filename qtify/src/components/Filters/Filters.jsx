import { Tab, Tabs } from '@mui/material'
import React from 'react'
import styles from './Filters.module.css' 

export default function Filters({filters, selectedFilterIndex, setSelectedFilterIndex }) {
    const handleChange = (event, value) => {
        setSelectedFilterIndex(value)
    }

    function a11yProps(index) {
        return {
            id : `simple-tab-${index}`,
            "aria-controls" : `simple-tabpanel-${index}`
        }
    }
  return (
    <div>
        <Tabs
            value = {selectedFilterIndex}
            onChange = {handleChange}
            aria-label = "basic tab example"
            TabIndicatorProps={{
                style : {
                    backgroundColor: "#34C94B",
                    textColor: "#FFFFFF",
                    
                },
            }}
        >
            {filters.map((ele, idx) => (
                <Tab className= {styles.tab} label = {ele.label} {...a11yProps(idx)} />
            ))}
        </Tabs>
    </div>
  )
}
