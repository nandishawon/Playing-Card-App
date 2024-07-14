

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cursor from '../images/cursor.svg';
import BackArrowWhite from '../images/Back Arrow White.svg'
import BackArrowBlack from '../images/Back Arrow black.svg'
import NextArrowBlack from '../images/Next arrow.svg'
import Image from '../images/card_image_9.png';
import AnimatedPage from "../AnimatedPage";


const Card9Component = () => {

    const [yellow, setYellow] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHoverEnabled, setIsHoverEnabled] = useState(true);

    const navigate = useNavigate();

    const handleReveal = () => {

        setIsFlipped(!isFlipped);

        setIsHoverEnabled(false);

        if (isFlipped) {
            setTimeout(() => {
                setReveal(!reveal);
            }, 213)
        }
        else {
            setTimeout(() => {
                setReveal(!reveal);
            }, 196)
        }

    }

    const handleMouseOut = () => {
        setIsHoverEnabled(true);
    }

    return (
        <div className="page-body">


            <span className="back" onClick={() => { navigate("/card_8") }}>
                {yellow ?
                    <img src={BackArrowBlack} className="blackArrow" alt="back" onMouseOut={() => { setYellow(false) }} />
                    :
                    <img src={BackArrowWhite} className="whiteArrow" alt="back" onMouseOver={() => { setYellow(true) }} />
                }
            </span>
            <div className="card">
                <AnimatedPage>
                    <div className={`card-box ${isFlipped ? 'flip' : 'front'} ${isHoverEnabled ? 'enable-hover' : ''}`}
                        onClick={handleReveal} onMouseOut={handleMouseOut}>
                        {!reveal ?
                            <div className="card-body" onClick={() => { setReveal(false) }}>
                                <p>Lisa had 12 balloons, and 7 flew away. How many balloons does Rita have now?</p>
                                <div className="body-footer">
                                    <img src={cursor} alt="" />
                                    <span>Tap to reveal answer</span>
                                </div>
                            </div>
                            :
                            <div className="image-card-body" onClick={() => { setReveal(true) }}>
                                <img src={Image} alt="" />
                                <div className="image-body-footer">
                                    <span>Rita has 5 balloons now (12 - 7 = 5)</span>
                                </div>
                            </div>
                        }
                    </div>
                </AnimatedPage>
            </div>
            <span className="next" onClick={() => { navigate("/card_10") }}>
                <img src={NextArrowBlack} alt="next" />
            </span>
        </div>


    )
}

export default Card9Component;

