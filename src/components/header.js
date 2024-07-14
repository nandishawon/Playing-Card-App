import React, { useState } from 'react';
import logo from '../header_images/logo.svg';
import mute from '../header_images/mute.svg';
import Volume from '../header_images/volume.png';

const Header = () => {
    const [volume, setVolume] = useState(true);

    return (
        <div className='header'>
                <img src={logo} alt="log.png" className='logo' />
                <div className='brandName'>
                    <span id='org'>Cloudifyapp Pvt.Ltd</span>
                    <span id='name'>By John Doe</span>
                </div>

                { volume ? 
                <img src={mute} alt="mute.png" className='mute' onClick={()=>{setVolume(false)}}/>
                :
                <img src={Volume} alt="volumeUp.png" className='volume' onClick={()=>{setVolume(true)}} />
                }
            </div>
    )
}

export default Header;
