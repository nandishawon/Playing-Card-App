import React from "react";
import CompletedCircle from '../images/completed.svg';
import PlayAgain from '../images/play again button.svg'
import { useNavigate } from "react-router-dom";

const Page12Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="body-container">
                <div className="body-box">
                    <img className="completedCircle" src={CompletedCircle} alt="completed" />
                    <p className="h-completed">Hope you learned something new!</p>
                </div>
                <div className="playButton1" onClick={() => { navigate("/") }}>
                    <img className="playAgainImage" src={PlayAgain} alt="play" />
                    <div className="playAgain">Play again</div>
                </div>
            </div>
        </div>
    )
}

export default Page12Component;