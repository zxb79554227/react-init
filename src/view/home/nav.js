import React from 'react'
// import Drop from './dropdown'



export default function nav() {
    return (
    <div className='nav-bar'>
        <div className="left-bar">
            <div className="my-photo-box">
                <img src={require("../../aseets/imgs/fresh.PNG")} alt=""/>
            </div>
            <span>MxM_Photography</span>
        </div>
        <div className="right-bar">
            <div className="select">
            </div>
        </div>
     </div>
     
    )
}
