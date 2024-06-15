import HeroCard from '@/components/HeroSection/HeroCard'
import HeroCard2 from '@/components/HeroSection/HeroCard2'
import HeroIncrement from '@/components/HeroSection/HeroIncrement'
import HeroSection1 from '@/components/HeroSection/HeroSection1'
import HeroSection2 from '@/components/HeroSection/HeroSection2'
import HeroSectionWithImg from '@/components/HeroSection/HeroSectionWithImg'
import Loading from '@/components/Loading/Loading'
import React from 'react'

const Page = () => {
    return (
        <>
            <Loading />
            <HeroSection1
                heading="Donate Blood, Save Life !"
                subheading="Saving lifes, Spreading Smiles !"
            />
            <button className="relative max-w-7xl mx-auto  sm:px-6 lg:px-8 flex items-center justify-between overflow-hidden bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
                Donate
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform scale-0 translate-x-full bg-red-900 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </button>
            <HeroSection2
                heading="Donate Blood, Save Life !"
                subheading="Saving lifes, Spreading Smiles !"
                content='We live in earth with equal right to tlive in this earth cause this is earch '
            />
            <HeroSectionWithImg
                title="Donate Blood, Save Life !"
                subtitle="Saving lifes, Spreading Smiles !"
                imgSrc="https://english.onlinekhabar.com/wp-content/uploads/2021/06/blood-donation.jpg"
            />
            <HeroIncrement
                label='Live Saved'
                number={1000}
            />


            <div className='flex gap-5'>

                <HeroCard
                    imageUrl="https://hamrolifebank.com/img/icon/digitization.png"
                    title="Donate Blood"
                    subtitle="We Motivate Donors"
                />
                <HeroCard2
                    title='Regestration'
                    subtitle='For reegestration one should fill the form up and then the data is collectef in our server which is secure and when needde only is used .'
                    count='3'
                />
            </div>

        </>
    )
}

export default Page