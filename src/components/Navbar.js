import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation()
    const navigate = useNavigate()

    return <div className="flex h-[70px] items-center justify-start md:justify-between text-white bg-[#0f0f0f] w-full">
        <div className="ml-4 md:ml-[9.4rem] w-[9.4rem] flex items-center justify-start">
            <img src='/eventick_logo.png' className='cursor-pointer' onClick={()=>{navigate('/')}}/>
        </div>
        <div className="md:flex mr-[9.4rem] gap-12 hidden">
            <div className={`cursor-pointer ${location.pathname==="/"?'text-[#F5D00B]':''}`} onClick={()=>{navigate('/')}}>Home</div>
            <div className={`cursor-pointer ${location.pathname==="/events"?'text-[#F5D00B]':''}`} onClick={()=>{navigate('/events')}}>Events</div>
            <div className={`cursor-pointer ${location.pathname==="/societies"?'text-[#F5D00B]':''}`} onClick={()=>{navigate('/societies')}}>Societies</div>
            <div className={`cursor-pointer ${location.pathname==="/about"?'text-[#F5D00B]':''}`} onClick={()=>{navigate('/about')}}>About Us</div>
        </div>
        
    </div>

}

export default Navbar