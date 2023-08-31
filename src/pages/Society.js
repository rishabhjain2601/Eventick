import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import EventsCarousel from '../components/EventsCarousel'
import events from '../data/events.json'

const Society = () => {

    // const [events, setEvents] = useState([])
    const location = useLocation()
    const society = location?.state?.society //This is passed from the previous page using navigate()
    const [aboutIsExpanded, setAboutIsExpanded] = useState(false)

    // function fetchData(){
    // fetch("/data/events.json")
    // .then(response => response.json())
    // .then(json => {
    //         setEvents(json)
    //         console.log(json)
    //     })
    // }

    // useEffect(()=>{
    //     fetchData()
    // },[])

  return (
    <div className='bg-darkGray min-h-screen flex flex-col gap-6 items-center md:mb-8'>

        
            <Navbar/>
        

        <main className="w-full md:w-8/12 flex flex-col gap-7 items-center">
            {/* banner */}
            <div className='w-full h-20 md:h-36'>
                <img src={society?.banner} className='object-cover w-full h-full md:rounded-2xl'/>
            </div>

            {/* title div */}
            <div className='flex gap-7 w-10/12 md:w-full'>
                {/* icon */}
                <div className='h-20 w-20 md:h-36 md:w-36 rounded-full bg-darkGray'>
                    <img src={society?.logo} className='rounded-full h-full w-full object-cover'/>
                </div>
                {/* title etc*/}
                <div className='flex flex-col md:w-1/3 md:gap-1'>
                    <h1 className='text-white text-xl font-medium md:text-3xl md:font-bold'>{society?.name}</h1>
                    <h3 className='text-lightestGray text-lg'>{society?.type}</h3>
                    <h3 className='text-lightestGray text-lg'>{society?.member_count} members</h3>
                    <div className='flex gap-3 md:gap-4 items-center w-full'>
                        <span className='text-lightestGray text-lg'>Registrations</span>
                        <span className={`h-[6px] w-[6px] rounded-full ${society?.registration_is_open?'bg-green-500':'bg-red-600'}`}>.</span>
                        <span className='text-white text-lg'>{society?.registration_is_open?'Open':'Closed'}</span>
                    </div>
                </div>
                {/* socials */}
                <div className='hidden md:flex gap-3'>
                    <div className='cursor-pointer h-[28px] w-[28px]' onClick={()=>{window.open(society?.linkedin)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M25.7495 0H2.2505C1.008 0 0 1.008 0 2.2505V25.7495C0 26.992 1.008 28 2.2505 28H25.7495C26.992 28 28 26.992 28 25.7495V2.2505C28 1.008 26.992 0 25.7495 0ZM25.7495 25.76C10.0765 25.7565 2.24 25.753 2.24 25.7495C2.2435 10.0765 2.247 2.24 2.2505 2.24C17.9235 2.2435 25.76 2.247 25.76 2.2505C25.7565 17.9235 25.753 25.76 25.7495 25.76ZM4.151 10.4965H8.3055V23.8595H4.151V10.4965ZM6.23 8.6695C7.5565 8.6695 8.638 7.5915 8.638 6.2615C8.638 5.94528 8.57572 5.63215 8.4547 5.34C8.33369 5.04785 8.15632 4.78239 7.93271 4.55879C7.70911 4.33518 7.44365 4.15781 7.1515 4.0368C6.85935 3.91578 6.54622 3.8535 6.23 3.8535C5.91378 3.8535 5.60065 3.91578 5.3085 4.0368C5.01635 4.15781 4.75089 4.33518 4.52729 4.55879C4.30368 4.78239 4.12631 5.04785 4.0053 5.34C3.88428 5.63215 3.822 5.94528 3.822 6.2615C3.8185 7.5915 4.8965 8.6695 6.23 8.6695ZM15.0605 17.248C15.0605 15.505 15.393 13.818 17.5525 13.818C19.6805 13.818 19.712 15.8095 19.712 17.36V23.8595H23.863V16.5305C23.863 12.9325 23.086 10.164 18.8825 10.164C16.863 10.164 15.5085 11.2735 14.952 12.3235H14.896V10.4965H10.9095V23.8595H15.0605V17.248Z" fill="white" fillOpacity="0.6"/>
                        </svg>
                    </div>
                    <div className='cursor-pointer h-[28px] w-[28px]' onClick={()=>{window.open(society?.instagram)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M8.12 0H19.88C24.36 0 28 3.64 28 8.12V19.88C28 22.0336 27.1445 24.0989 25.6217 25.6217C24.0989 27.1445 22.0336 28 19.88 28H8.12C3.64 28 0 24.36 0 19.88V8.12C0 5.96644 0.855498 3.90109 2.37829 2.37829C3.90109 0.855498 5.96644 0 8.12 0ZM7.84 2.8C6.50331 2.8 5.22137 3.331 4.27618 4.27618C3.331 5.22137 2.8 6.50331 2.8 7.84V20.16C2.8 22.946 5.054 25.2 7.84 25.2H20.16C21.4967 25.2 22.7786 24.669 23.7238 23.7238C24.669 22.7786 25.2 21.4967 25.2 20.16V7.84C25.2 5.054 22.946 2.8 20.16 2.8H7.84ZM21.35 4.9C21.8141 4.9 22.2593 5.08437 22.5874 5.41256C22.9156 5.74075 23.1 6.18587 23.1 6.65C23.1 7.11413 22.9156 7.55925 22.5874 7.88744C22.2593 8.21563 21.8141 8.4 21.35 8.4C20.8859 8.4 20.4408 8.21563 20.1126 7.88744C19.7844 7.55925 19.6 7.11413 19.6 6.65C19.6 6.18587 19.7844 5.74075 20.1126 5.41256C20.4408 5.08437 20.8859 4.9 21.35 4.9ZM14 7C15.8565 7 17.637 7.7375 18.9497 9.05025C20.2625 10.363 21 12.1435 21 14C21 15.8565 20.2625 17.637 18.9497 18.9497C17.637 20.2625 15.8565 21 14 21C12.1435 21 10.363 20.2625 9.05025 18.9497C7.7375 17.637 7 15.8565 7 14C7 12.1435 7.7375 10.363 9.05025 9.05025C10.363 7.7375 12.1435 7 14 7ZM14 9.8C12.8861 9.8 11.8178 10.2425 11.0302 11.0302C10.2425 11.8178 9.8 12.8861 9.8 14C9.8 15.1139 10.2425 16.1822 11.0302 16.9698C11.8178 17.7575 12.8861 18.2 14 18.2C15.1139 18.2 16.1822 17.7575 16.9698 16.9698C17.7575 16.1822 18.2 15.1139 18.2 14C18.2 12.8861 17.7575 11.8178 16.9698 11.0302C16.1822 10.2425 15.1139 9.8 14 9.8Z" fill="white" fillOpacity="0.6"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* about */}
            <div className={`bg-lightGray w-full rounded-2xl`}>
                <div className='py-4 px-6'>
                    <h3 className='text-white pb-2'>About</h3>
                    {/*p with more text for dektop, p with less text for mobile*/}
                    <p className='hidden md:block text-lightestGray'>{aboutIsExpanded? society?.about : society?.about?.substring(0,450)}<span className={`text-yellow-400 cursor-pointer ${society?.about?.length < 451? 'hidden' :  ''}`} onClick={()=>{setAboutIsExpanded((aboutIsExpanded)=>!aboutIsExpanded)}}>{aboutIsExpanded? ' ...less' : ' more...'}</span></p>
                    <p className='md:hidden text-lightestGray'>{aboutIsExpanded? society?.about : society?.about?.substring(0,250)}<span className={`text-yellow-400 cursor-pointer ${society?.about?.length < 251? 'hidden' :  ''}`} onClick={()=>{setAboutIsExpanded((aboutIsExpanded)=>!aboutIsExpanded)}}>{aboutIsExpanded? ' ...less' : ' more...'}</span></p>
                </div>
            </div>

            {/* upcoming events */}
            <div className='w-full'>
                <h3 className='text-white text-left text-lg ml-3 md:ml-14 mb-1'>Upcoming Events</h3>
                <EventsCarousel events={events}/>
            </div>

            {/* recruitment process */}
            <div className='bg-lightGray w-full rounded-2xl'>
                <div className='py-8 px-6 md:px-12'>

                    <div className='flex justify-between items-center'>
                        <h3 className='text-white text-lg md:text-2xl font-medium md:font-semibold'>Recruitment Process</h3>
                        <button className='bg-darkGray border border-white py-2 px-6 md:px-10 rounded-lg cursor-pointer text-white text-md md:text-lg'>Register</button>
                    </div>

                    <div className='mt-5 ml-2 md:ml-0'>
                        {society?.recruitment_process?.map((step, index)=>{
                            return(
                                <div className='relative h-full flex mt-[2px]' key={index}>
                                    <div className="absolute border-dashed border-yellow-400 h-full border" ></div>
                                    <div className='absolute rounded-full bg-yellow-400 h-3 w-3 outline outline-offset-2 outline-yellow-400 outline-1 top-5 -left-1'></div>
                                    <div className='mx-5 mb-4'>
                                        <p className='text-yellow-400 text-lg font-mono'>Step {index+1}</p>
                                        <p className='text-lightestGray text-sm md:text-md'>{step}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>

            {/* past events */}
            <div className='w-full'>
                <h3 className='text-white text-left text-lg ml-3 md:ml-14 mb-1'>Past Events</h3>
                <EventsCarousel events={events}/>
            </div>

        </main>

    </div>
  )
}

export default Society