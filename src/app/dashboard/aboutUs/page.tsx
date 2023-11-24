import React from 'react';
import DiscoverOurRoots from '../../components/About_Us_Hero/DiscoverOurRoots';
import MisionVisionValuesCards from "../../components/Mision_Vision_Values_Card/MisionVisionValuesCard";
import IMS from "../../components/IMS/IMS";
import TeamCards from "../../components/Team_Card/TeamCard";
import Collaborators from "../../components/Collaborators/Collaborators";

const AboutUs = () => {

    return (
        <>
          <DiscoverOurRoots/>
          <MisionVisionValuesCards/>
          <IMS/>
          {/*<TeamCards/>*/}
          <Collaborators/>
        </>
    )
}

export default AboutUs