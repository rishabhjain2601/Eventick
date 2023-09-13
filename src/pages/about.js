import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
import Navbar from '../components/Navbar'
import ourTeam from '../data/ourTeam.json'
import CouncilCard from '../components/CouncilCard'



export default function about() {
  return (
    <div>

        <Navbar/>
      
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 md:w-9/12 w-10/12 mx-auto mt-14 mb-7 md:md-0">
            <div className='flex flex-col font-semibold gap-5 text-lightestGray md:w-[35%]'>
                <h2 className='text-white text-4xl'>
                    We Build bridges between  <span className='text-lightestGray'>societies and students</span>
                </h2>
                <p className='text-xl font-normal'>
                    <span className='span2'>Eventus is a subsidiary of</span><span className='text-white'> Business Bulls DTU</span> <span className='span3'>which helps to digitalise the hassling process of booking college events and joining college societies</span>
                </p>
            </div>
            <img className='bullpic' src='/bull-image.png' alt='Business Bulls'/>

        </div>

        <div className='bg-white w-full pt-1 pb-12'>
            <div className="text-lightGray flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 md:w-9/12 w-10/12 mx-auto mt-14">
                <div className='md:w-[40%]'>
                    <img className='object-contain h-full w-full' src='Frame 50.png' alt=''/>
                </div>
    
                <div className='md:w-[45%] text-[#0F0F0F99] text-lg flex flex-col gap-5'>
                    <h2 className="text-4xl text-black">Business Bulls</h2>
                        <p className=''>
                            Business Bulls has gained recognition for its dedication to promoting the growth of promising startups and nurturing the entrepreneurial ecosystem. We have been following your startup's journey with great interest.
                        </p>
                        <p className="">
                            Business Bulls has gained recognition for its dedication to promoting the growth of promising startups and nurturing the entrepreneurial ecosystem. We have been following your startup's journey with great interest.
                        </p>
                        <p className=''>
                            Business Bulls has gained recognition for its dedication to promoting the growth.
                        </p>
                </div>
            </div>
        </div>

        <div></div>

        <div className='pt-5'>

            <div className='bg-darkGray pt-3 mb-10 flex flex-col gap-6 items-center'>

                <h1 className='text-white text-center font-bold text-5xl font-roboto tracking-wide'>Our Team</h1>

                <div className='grid gap-7 grid-cols-2 md:grid-cols-4 my-8 mx-3 lg:mx-0'>
                    {ourTeam?.map((teamMember, index)=>(
                        <div className='mt-2' key={index} >
                            <CouncilCard councilMember={teamMember} key={index} />
                        </div>
                    ))}
                </div>

            </div> 
        </div>

        <BottomNavbar/>

    </div>
  
  )
}
