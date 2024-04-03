import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { useOutletContext } from 'react-router-dom'
import Section from '../components/Section/Section'

export default function HomePage() {
    const { data } = useOutletContext()
    const {topAlbums, newAlbums} = data

  return (
    <>
        <HeroSection />
        <Section name="top" data= {topAlbums} />
        <Section name="new" data = {newAlbums} />
    </>
  )
}
