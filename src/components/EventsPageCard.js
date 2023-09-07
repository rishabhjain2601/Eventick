import { useNavigate } from "react-router-dom"

const EventsPageCard = ({event, isSelected=false}) => {

    const navigate = useNavigate()

    return(
        <div onClick={()=>{navigate('/event', {state:{event: event}})}} className={`cursor-pointer w-[45vw] md:w-[290px] relative border rounded-xl flex flex-col gap-2 justify-left border-[#FFFFFF26] hover:border-red-700 `}>
            <div className="h-[180px] md:h-[210px] relative w-full">
                <img src={event?.event_logo} className="object-cover h-[180px] md:h-[217px] rounded-none rounded-t-xl"/>
            </div>

            <div className="px-3 pt-1 pb-3 text-ellipsis overflow-hidden">
                <div className="leading-tight text-sm pb-1">
                    <h3 className="text-white drop-shadow-lg shadow-black">{event?.event_name?.toUpperCase()}</h3>
                    <p className="text-white drop-shadow-lg shadow-black">{event?.organizer}</p>
                </div>
                <div className="leading-tight text-sm text-lightestGray">
                    <p>{event?.start}</p>
                    <p>{event?.venue}</p>
                    {/* <p>{event?.genre}</p> */}
                </div>
                <p className="text-white text-sm pt-1">{event?.fee} | {event?.mode}</p>
            </div>

        </div>
    )
}

export default EventsPageCard