import React from 'react'
const SOC_IMG_PATH = '/soc images'

const AboutUsCard = ({councilMember}) => {
  return (
        <div className='border border-[#FFFFFF26] w-[80%] rounded-xl overflow-hidden'>
            <div className="h-[250px] relative w-full overflow-hidden lg:pb-[10%]">
                <img src={`${SOC_IMG_PATH}/${councilMember?.image}`} className="object-cover h-[100%] w-[100%] rounded-none rounded-t-xl" />
            </div>

            <div className="px-3 pb-3">
                <p className="text-white text-xl font-bold pt-1">{councilMember?.name}</p>
                <p className="text-white text-sm pt-1">{councilMember?.position}</p>
            </div>
        </div>
    )
}

export default AboutUsCard