import React from 'react'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import FeaturesSectionFruits from '../Components/FeaturesSectionFruits'
import FeatureSectionDairy from '../Components/FeatureSectionDairy'
import BannerSection from '../Components/BannerSection'
import NewsLetter from '../Components/NewsLetter'
import FeatureSection from '../Components/FeatureSection'
function Home() {
  return (
    <div>
        <Hero />
        <Category />
        <FeaturesSectionFruits />
        <FeatureSectionDairy />
        <BannerSection />
        <NewsLetter />
        <FeatureSection />
    </div>
  )
}

export default Home