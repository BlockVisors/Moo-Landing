import React, { Fragment, useEffect } from 'react'
import '../public/assets/scss/landing.scss'
import Head from 'next/head'
// import Custom Components
import Header from '../landing/header'
import BannerSection from './layouts/sections/enterprice-sass/banner'

import GiftSection from '../landing/git-section'
import DemoSection from '../landing/demo'
import PortfolioSection from '../landing/portfolio'
import WhatinsideSection from '../landing/whatinside'
import BlogSection from '../landing/blog'
import ElementSection from '../landing/elements'
import FeaturesSection from '../landing/features'
import TestimonialSection from '../landing/testimonial'
import RatSection from '../landing/rat'
import FooterSection from '../landing/footer'
import Footer2 from '../containers/common/footer'
import Footer from '../landing/footer'


const Home = () => {
  
  useEffect(() => {
    document.body.style.setProperty('--primary', '#10266b')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#1F357D')
    document.body.style.setProperty('--dark', '#04185B')
  })

  return (
    <Fragment>
      {/* <div className="landing-page"> */}
      <div className="landing-page">
      <Head>
        <title>MOO Finance</title>
      </Head>

      <Header />
      <BannerSection />

      <GiftSection />

      <DemoSection />

      <PortfolioSection />

      <WhatinsideSection />

      <BlogSection />

      <ElementSection />

      <FeaturesSection />

      <TestimonialSection />

      <RatSection />

      <Footer2 />
      
      {/* <FooterSection /> */}
      </div>
    </Fragment>
  )
}

export default Home
