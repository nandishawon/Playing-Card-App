import React from "react";
import play1 from '../images/play1.svg';
import { useNavigate } from "react-router-dom";

const Page1Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="body-container">
                <div className="body-box">
                    <h1 className="h-primary">Addition and Subtraction Facts within 20</h1>
                    <p className="h-secondary">Test your knowledge with the follwing questions, tap a card to flip it and uncover the answer,good luck!</p>
                </div>
                <div className="playButton1" onClick={() => { navigate("/card_1") }}>
                    <img className="playImage" src={play1} alt="play" />
                    <div className="play">Let's play</div>
                </div>
            </div>
        </div>
    )
}

export default Page1Component;