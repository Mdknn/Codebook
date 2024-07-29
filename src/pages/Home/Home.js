import React from 'react'
import { Hero } from './components/HeroSection'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Testimonials } from './components/Testemonial'
import { Faq } from './components/Faq'
import { useTitle } from '../../hooks/useTitle'

export const Home = () => {
  useTitle("Ebooks Learning site Codebook")
  return (
    <main>
         <Hero/>
         <FeaturedProducts/>
         <Testimonials/>
         <Faq/>
    </main>
    
  )
}

 