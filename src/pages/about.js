import React from 'react'
import "./about.css"
import bull from "../data/bull (2).png"
import party from "../data/party.jpg"
import BottomNavbar from '../components/BottomNavbar'
import Navbar from '../components/Navbar'


export default function about() {
  return (
    <div>

        <Navbar/>
      
        <div className="box1">
            <h2 className='main-heading'>
                We Build bridges between  <span className='span1'>societies and students</span>
            </h2>
            <p className='p1'>
                <span className='span2'>Eventus is a subsidiary of</span> Business Bulls DTU <span className='span3'>which helps to digitalise the hassling process of booking college events and joining college societies</span>
            </p>
            <img className='bullpic' src={bull} alt='bull'/>

        </div>

        <div className="box2">
            <div className='wrapper'>
                <img className='imgs a' src={party} alt=''/>
                <img className='imgs b' src={party} alt=''/>
                <img className='imgs c' src={party} alt=''/>
                <img className='imgs d' src={party} alt=''/>
                <img className='imgs e' src={party} alt=''/>
                <img className='imgs f' src={party} alt=''/>
                <img className='imgs g' src={party} alt=''/>
            </div>

            <div className='content2'>
                <h2 className="heading1">Business Bulls</h2>
                <p className='para1'>
                    Business Bulls has gained recognition for its dedication to promoting the growth of promising startups and nurturing the entrepreneurial ecosystem. We have been following your startup's journey with great interest.
                </p>
                <p className="para2">
                    Business Bulls has gained recognition for its dedication to promoting the growth of promising startups and nurturing the entrepreneurial ecosystem. We have been following your startup's journey with great interest.
                </p>
                <p className='para3'>
                    Business Bulls has gained recognition for its dedication to promoting the growth.
                </p>
            </div>
        </div>

        <div></div>

        <div className='box3'>
            <h2 className='heading3'>Our Team</h2>

            <div className='cards'>
                <div className="card">
                    <img src={party} alt="Avatar"/>
                    <div class="container">
                        <h4 className='pcard'><b>John Doe</b></h4>
                        <p className='pcard'>Architect & Engineer</p>
                    </div>
                </div>

                <div class="card">
                    <img src={party} alt="Avatar"/>
                    <div class="container">
                        <h4 className='pcard'><b>John Doe</b></h4>
                        <p className='pcard'>Architect & Engineer</p>
                    </div>
                </div>

            
                <div class="card">
                    <img src={party} alt="Avatar"/>
                    <div class="container">
                        <h4 className='pcard'><b>John Doe</b></h4>
                        <p className='pcard'>Architect & Engineer</p>
                    </div>
                </div>

                <div class="card">
                    <img src={party} alt="Avatar"/>
                    <div class="container">
                        <h4 className='pcard'><b>John Doe</b></h4>
                        <p className='pcard'>Architect & Engineer</p>
                    </div>
                </div>

                <div className="card">
                    <img src={party} alt="Avatar"/>
                    <div class="container">
                        <h4 className='pcard'><b>John Doe</b></h4>
                        <p className='pcard'>Architect & Engineer</p>
                    </div>
                </div>

                <div class="card">
                    <img src={party} alt="Avatar"/>
                    <div class="container">
                        <h4 className='pcard'><b>John Doe</b></h4>
                        <p className='pcard'>Architect & Engineer</p>
                    </div>
                </div>

            
                <div class="card">
                    <img src={party} alt="Avatar"/>
                    <div class="container">
                        <h4 className='pcard'><b>John Doe</b></h4>
                        <p className='pcard'>Architect & Engineer</p>
                    </div>
                </div>

                <div class="card">
                    <img src={party} alt="Avatar"/>
                    <div class="container">
                        <h4 className='pcard'><b>John Doe</b></h4>
                        <p className='pcard'>Architect & Engineer</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
  )
}
