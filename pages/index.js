import React, { useEffect } from 'react'
import Head from 'next/head'
// import Custom Components
//import Header from ./../containers/common/header'
import MooHeader from './../containers/common/Mooheader'
import Header from '../landing/header'
import FAQ from './layouts/sections/modern-sass/faq'

// import Custom Components
import SaleCountdown from './elements/count-down'
import CountDownSection from './layouts/sections/event/banner'


import Team from './layouts/sections/app/member'
import AboutEvent from './layouts/sections/event/about'

import ScheduleSection from './layouts/sections/event/schedule'

import BannerSection from './layouts/sections/enterprice-sass/banner'
import FeatureSection from './layouts/sections/enterprice-sass/feature'
import BusinessSection from './layouts/sections/enterprice-sass/business'
import ServiceSection from './layouts/sections/enterprice-sass/service'
import SliderSection from './layouts/sections/enterprice-sass/slider'
import PricingSection from './layouts/sections/enterprice-sass/pricing'
import TestimonialSection from './layouts/sections/enterprice-sass/testimonial'
import BrandSection from './layouts/sections/enterprice-sass/brand'
//import FooterSection from './layouts/sections/enterprice-sass/footer'
import Footer2 from '../containers/common/footer'
import NavMain from '../containers/common/NavMain'


const EnterpriceSass = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#844adb')
        document.body.style.setProperty('--secondary', '#071828')
        // document.body.style.setProperty('--light', '#5E57EA')
        document.body.style.setProperty('--light', '#9647DB')
        document.body.style.setProperty('--dark', '#9647DB')
    })

    return (
        <div>
            <Head>
                <title>MOO Finance</title>
            </Head>
            {/* <NavMain /> */}
            <MooHeader className="saas2"/>
            {/* <Header /> */}
            <BannerSection />

             {/* <SaleCountdown /> */}
            <FeatureSection />
            <CountDownSection />
            <AboutEvent />

            <BusinessSection />

            {/* <ServiceSection /> */}

            <SliderSection />

            <Team />
            {/* <PricingSection /> */}

            {/* <TestimonialSection /> */}
            <ScheduleSection />
            <FAQ />
            <BrandSection />

            {/* <FooterSection /> */}
            <Footer2 />

        </div>
    )
}

export default EnterpriceSass;