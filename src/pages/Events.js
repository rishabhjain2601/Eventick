import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import events from '../data/events.json'
import EventsPageCard from '../components/EventsPageCard'
import BottomNavbar from '../components/BottomNavbar'
import Genre from '../components/Genre'
import { useSearchParams } from 'react-router-dom'

const Events = () => {

    const [selectedGenre, setSelectedGenre] = useState(0)
    const buttons = ["All", "Cultural Event", "Academic", "Competition", "Hackathon"]
    

    const [searchParams] = useSearchParams()
    const searchParamGenre = searchParams.get("genre")

    useEffect(()=>{
        if(searchParamGenre){
            const searchParamGenreUpdated = searchParamGenre.replace("%20", " ");
            setSelectedGenre(buttons.indexOf(searchParamGenreUpdated))
        }
        console.log(searchParamGenre)
    },[])
   

    const handleButtonClick = (index) => {
        const abc = buttons.indexOf(index)
        setSelectedGenre(abc);
    };

    
    const genre = (event) =>{
        return event.genre === `${buttons[selectedGenre]}`
    }

    return (
        <div className='bg-darkGray min-h-screen flex flex-col gap-6 items-center'>

            <Navbar />

            <h1 className='text-white text-center font-bold text-5xl font-roboto tracking-wide'>Events</h1>

            <div className='flex text-white mx-auto mb-[-28px]'>
                <div className='mx-10 my-auto hidden md:block'>GENRE:</div>
                <div className=''><Genre buttons={buttons} onButtonClick={handleButtonClick} /></div>
            </div>
            <div >
                {selectedGenre === 0 ?
                    <div className='grid gap-2 md:gap-9 grid-cols-2 md:grid-cols-3 my-8 mx-3 lg:mx-0'>{events?.map((event, index) => (
                        <div className='mt-2' key={index}>
                            <EventsPageCard event={event} />
                        </div>
                    ))}
                    </div> : <div className='grid gap-2 md:gap-9 grid-cols-2 md:grid-cols-3 my-8 mx-3 lg:mx-0'>{events.filter(genre).map((event, index) => (
                        <div className='mt-2' key={index}>
                            <EventsPageCard event={event} />
                        </div>
                    ))}
                    </div>
                }
            </div>

            <BottomNavbar />
        </div>
    )
}

export default Events