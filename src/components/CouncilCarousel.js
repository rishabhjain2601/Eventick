import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import CouncilCard from './CouncilCard'

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
]

const CouncilCarousel = ({councildata}) => {
    return (
        <Carousel showEmptySlots itemPadding={[2, 10]} breakPoints={breakPoints} renderArrow={myArrowOrange} >

            {
                councildata?.map((councilMember, index) => (
                    <CouncilCard councilMember={councilMember} key={index} />
                ))
            }
        </Carousel>
    )
}

export default CouncilCarousel
