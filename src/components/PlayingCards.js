import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DottedNavigation from "./dottedNav";
import { useState } from 'react';


const PlayingCardsComponent = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const pageId = location.pathname.split("_")[1];

    useEffect(() => {
        setActiveStep((+ pageId));
    },[pageId]);

    const [activeStep, setActiveStep] = useState(1);

    const totalSteps = 10;


    const handleStepChange = (step) => {
        setActiveStep(step);
        console.log(step);
        navigate(`card_${step}`);
    }

    return (
        <div className="page-box">
            <div className="dotted-navigation-box">
                <span className='pageNumber'>{`${activeStep}/${totalSteps}`}</span>
                <DottedNavigation
                    totalSteps={totalSteps}
                    activeStep={activeStep}
                    onChangeStep={handleStepChange}
                />
            </div>
            <Outlet />
        </div>
    )
}

export default PlayingCardsComponent;