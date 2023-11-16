import React from 'react'
import ConnectWithUs from '../../components/ConnectWithUs/ConnectWithUs';
import ContactCards from '../../components/Contact_Card/ContactCard';
import TabBar from '../../components/Tab_Bar/TabBar';

const Contact = () => {
    return (
      <>
        <ConnectWithUs/>
        <ContactCards/>
        <TabBar/>    
      </>
    )
}

export default Contact