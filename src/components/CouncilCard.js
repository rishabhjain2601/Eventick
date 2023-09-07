import React from 'react'

const CouncilCard = ({council}) => {
    return (
        <div>
            <div className="h-[250px] relative w-full">
                <img src={council?.image} className="object-cover h-[250px] rounded-none rounded-t-xl" />
            </div>

            <div className="px-3 pb-3">
                <p className="text-white text-xl font-bold pt-1">{council?.name}</p>
                <p className="text-white text-sm pt-1">{council?.position}</p>
            </div>
        </div>
    )
}

export default CouncilCard
