import FAQs from '@/components/FAQs'
import Hero from '@/components/Hero'
import ResumeParserFeatures from '@/components/ResumeParserFeatures'


import React from 'react'



const Landing = () => {
    return (
        <div>
            <Hero />
            <ResumeParserFeatures/>
            {/* <ResumeParserSteps/> */}
            <FAQs/>
        </div>
    )
}

export default Landing