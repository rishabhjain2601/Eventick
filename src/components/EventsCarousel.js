import React from 'react'
import EventCard from '../components/EventCard'
import Carousel, { consts } from 'react-elastic-carousel'

const myArrowOrange = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <img src="left-arrow-o.svg" alt="" /> : <img src="right-arrow-o.svg" alt="" />
  return (
    <button onClick={onClick} >
      {pointer}
    </button>
  )
}

const breakPoints = [

  { width: 300, itemsToShow: 2 },
  { width: 500, itemsToShow: 3 },
  { width: 700, itemsToShow: 4 },
  { width: 1000, itemsToShow: 4, itemPadding: [2, 10, 0, 20] }
]

const EventsCarousel = ({ events }) => {
  return (
    <Carousel showEmptySlots className='upcoming_carousel' itemPadding={[2, 10]} breakPoints={breakPoints} renderArrow={myArrowOrange} >

      {
        events?.map((eventObj, index) => (
          <EventCard event={eventObj} key={index} />
        ))
      }
    </Carousel>
  )
}

export default EventsCarousel