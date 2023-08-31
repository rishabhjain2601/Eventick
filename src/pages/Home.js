import React, { useState } from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import Main_slide from '../components/Main_slide'
import SocietyCard from '../components/SocietyCard'
import './home.css'
import events from '../data/events.json'
import societies from '../data/societies.json'
import EventsCarousel from '../components/EventsCarousel'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <img src="left-arrow.svg" alt="" /> : <img src="right-arrow.svg" alt="" />
  return (
    <button onClick={onClick} >
      {pointer}
    </button>
  )
}

const myArrowOrange = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <img src="left-arrow-o.svg" alt="" /> : <img src="right-arrow-o.svg" alt="" />
  return (
    <button onClick={onClick} >
      {pointer}
    </button>
  )
}

const breakPoints = [

  { width: 600, itemsToShow: 2 },
  { width: 800, itemsToShow: 4 },
  { width: 1100, itemsToShow: 5 }
]

const Home = () => {

  const navigate = useNavigate()

  const [selected, setSelected] = useState()

  return (
    <div>
      <Navbar />
      <div className='md:mx-[10vw] md:mb-8'>


        {/* Top static banner */}
        <div className="flex flex-col gap-3 md:gap-5 mx-auto mb-8 mt-1 md:mb-10 md:mt-8 w-11/12 md:w-8/12 text-center items-center justify-center">
          <h1 className='text-5xl font-semibold'><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F54109] to-[#ef970a]" >EXPERIENCE</span> <span className="text-white">THE BEST EVENTS OF YOUR</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F54109] to-[#ef970a]">COLLEGE</span></h1>
          <p className='text-lightestGray text-md'>Get to know about all the cultural fests, competitions and hackathons that are going to happen in your college</p>
          <button onClick={() => { navigate('/events') }} className='px-6 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black'>Explore Events</button>
        </div>

        {/* main big carousel */}
        <Carousel itemsToShow={1} renderArrow={myArrow} enableAutoPlay autoPlaySpeed={2500}>
          <div>{Main_slide(0)}</div>
          <div>{Main_slide(1)}</div>
          <div>{Main_slide(1)}</div>
          <div>{Main_slide(1)}</div>
          <div>{Main_slide(1)}</div>
        </Carousel>

        <div className='mt-10'>
          <h3 className='text-white text-lg font-semibold text-left ml-3 md:ml-14 mb-1'>Upcoming Events
            <a className='text-yellow-500 float-right cursor-pointer font-light mr-[7%]' onClick={() => { navigate('/events') }}>view all</a></h3>
          <EventsCarousel events={events} />
        </div>

        {/*4 Genres*/}
        <div className='w-11/12 mx-auto py-10'>
          <h3 className='text-white text-lg font-semibold text-left'>Search By Genre</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className='relative cursor-pointer'>
              <img className='' src="/GenreOne.png" />
              <p className='absolute text-white bottom-1 text-center w-full drop-shadow-lg shadow-black'>Cultural Events</p>
            </div>
            <div className='relative cursor-pointer'>
              <img src="/GenreTwo.png" />
              <p className='absolute text-white bottom-1 text-center w-full drop-shadow-lg shadow-black'>Academics</p>
            </div>
            <div className='relative cursor-pointer'>
              <img src="/GenreThree.png" />
              <p className='absolute text-white bottom-1 text-center w-full drop-shadow-lg shadow-black'>Competitions</p>
            </div>
            <div className='relative cursor-pointer'>
              <img src="/GenreFour.png" />
              <p className='absolute text-white bottom-1 text-center w-full drop-shadow-lg shadow-black'>Hackathons</p>
            </div>
          </div>
        </div>

        {/* societies carousel */}
        <div>
          <h3 className='text-white text-lg font-semibold text-left ml-3 md:ml-14'>Societies
            <a className='text-yellow-500 float-right cursor-pointer font-light mr-[5%]' onClick={() => { navigate('/societies') }}>view all</a></h3>
          <Carousel className='upcoming_carousel' itemPadding={[10, 10]} breakPoints={breakPoints} renderArrow={myArrowOrange} >
            {
              societies.map((society, index) => (
                <div key={index} onClick={() => { setSelected(index) }}><SocietyCard society={society} isSelected={selected === index} /></div>
              ))
            }
          </Carousel>
        </div>
      </div>
    </div>
  )
}


export default Home
