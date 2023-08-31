import React from 'react'
import EventCard from '../components/EventCard'
import Carousel,{consts} from 'react-elastic-carousel'

const myArrowOrange = ({ type, onClick, isEdge }) =>{
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

const EventsCarousel = ({events}) => {
  return (
    <Carousel className='upcoming_carousel' breakPoints={breakPoints} renderArrow={myArrowOrange} >
          {
            events?.map((eventObj, index)=>(
              <EventCard event={eventObj} key={index}/>
            ))
          }
      </Carousel>
  )
}

export default EventsCarousel