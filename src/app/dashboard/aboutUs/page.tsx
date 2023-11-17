import React from 'react';
import DiscoverOurRoots from '../../components/About_Us_Hero/DiscoverOurRoots';
import MisionVisionValuesCards from "../../components/Mision_Vision_Values_Card/MisionVisionValuesCard";
import TeamCards from "../../components/Team_Card/TeamCard";
import Collaborators from "../../components/Collaborators/Collaborators";

const AboutUs = () => {

    return (
        <>
          <DiscoverOurRoots/>
          <MisionVisionValuesCards/>
          <TeamCards/>
          <Collaborators/>
        </>
    )
}

export default AboutUs