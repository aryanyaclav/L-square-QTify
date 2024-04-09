import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { useOutletContext } from 'react-router-dom'
import Section from '../components/Section/Section'
import { fetchGenres } from '../api/api'

export default function HomePage() {
    const { data } = useOutletContext()
    const {topAlbums, newAlbums, songs} = data

  return (
    <>
        <HeroSection />
        <Section title="Top Albums" data= {topAlbums} type="albums"/>
        <Section title="New Albums" data = {newAlbums} type="albums" />
        <Section title = "Songs" data = {songs} type = "songs" filterSource = {fetchGenres} />
    </>
  )
}
