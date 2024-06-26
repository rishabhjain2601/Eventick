import React from 'react'
const SOC_IMG_PATH = '/soc images'

const CouncilCard = ({councilMember}) => {
    return (
        <div className='border border-[#FFFFFF26] rounded-xl'>
            <div className="h-[250px] relative w-full">
                <img src={`${SOC_IMG_PATH}/${councilMember?.image}`} className="object-contain h-[250px] rounded-none rounded-t-xl" />
            </div>

            <div className="px-3 pb-3">
                <p className="text-white text-xl font-bold pt-1">{councilMember?.name}</p>
                <p className="text-white text-sm pt-1">{councilMember?.position}</p>
            </div>
        </div>
    )
}

export default CouncilCard
