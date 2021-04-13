import React from 'react';

import SpeechSurrogates from './featuredProjects/speech_surrogates';
import MyBallot from './featuredProjects/myballot';
import Flourish from './featuredProjects/flourish';

const FeaturedProjects = (props) => {
    return(
        <div>
            <SpeechSurrogates/>
            <MyBallot/>
            <Flourish/>
        </div>
    );
}
export default FeaturedProjects;