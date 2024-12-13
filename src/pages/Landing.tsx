import FAQs from '@/components/FAQs'
import Hero from '@/components/Hero'
import ResumeParserFeatures from '@/components/ResumeParserFeatures'
import React from 'react'



const Landing = () => {
    return (
        <div>
            <Hero />
            <ResumeParserFeatures/>
            <FAQs/>
        </div>
    )
}

export default Landing