import { useNavigate } from "react-router-dom"


const EventCard = ({event, isSelected=false}) => {

    const navigate = useNavigate()

    return(
        <div onClick={()=>{navigate('/event', {state:{event: event}})}} className={`cursor-pointer max-w-[190px] relative border rounded-xl flex flex-col gap-2 justify-left  ${isSelected?'border-red-700' : 'border-[#FFFFFF26]'}`}>
            <div className="h-[250px] relative w-full">
                <img src={event?.event_logo} className="object-cover h-[250px] rounded-none rounded-t-xl"/>
                <div className="absolute left-2 bottom-2">
                    <h3 className="text-white drop-shadow-lg shadow-black">{event?.event_name}</h3>
                    <p className="text-lightestGray drop-shadow-lg shadow-black">{event?.organizer}</p>
                </div>
            </div>

            <div className="px-3 pb-3">
                <div className="leading-tight text-sm text-lightestGray">
                    <p>{event?.start?.slice(0,6)}| {event?.venue}</p>
                    <p>{event?.genre}</p>
                </div>
                <p className="text-white text-sm pt-1">{event?.fee} | {event?.mode}</p>
            </div>

        </div>
    )
}

export default EventCard