import React from 'react'
import '../styles/globals.css'
import { ServiceCard } from '../components/Service_Card/ServiceCard'

const HomePage = () => {
    return (
        <div>
            <div className='center'>
                LA HOME
            </div>
            <ServiceCard className='civil' imageName='excavator' header='CIVIL WORKS' content='Excellence in construction, your trusted partner' />
        </div>
    )
}

export default HomePage