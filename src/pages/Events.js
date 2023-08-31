import React, { useEffect, useState } from 'react'
import SocietyCard from '../components/SocietyCard'
import Navbar from '../components/Navbar'
import events from '../data/events.json'
import EventCard from '../components/EventCard'

const Events = () => {

    const [selected, setSelected] = useState()

  return (
    <div className='bg-darkGray min-h-screen flex flex-col gap-6 items-center'>

        <Navbar/>

        <h1 className='text-white text-center font-bold text-5xl font-roboto tracking-wide'>Events</h1>

        <div className='grid gap-9 grid-cols-2 md:grid-cols-4 my-8 mx-3 lg:mx-0'>
            {events?.map((event, index)=>(
                <div className='mt-2' key={index}>
                    <EventCard event={event}/>
                </div>
            ))}
        </div>

    </div>    
  )
}

export default Events