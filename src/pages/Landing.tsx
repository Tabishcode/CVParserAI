import FAQs from '@/components/FAQs'
import Hero from '@/components/Hero'
import ResumeParserFeatures from '@/components/ResumeParserFeatures'
import ResumeParserSteps from '@/components/ResumeSteps'
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