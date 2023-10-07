import React from 'react'
import classes from './header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <nav className={classes.header}>
            <ul className={classes.navBar}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/dashboard/aboutUs'>AboutUs</Link></li>
                <li><Link href='/dashboard/contact'>Contact</Link></li>
                <li><Link href='/dashboard/news'>News</Link></li>
                <li><Link href='/dashboard/projects'>Projects</Link></li>
                <li><Link href='/dashboard/services'>Services</Link></li>
            </ul>
        </nav>
    )
}

export default Header