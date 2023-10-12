import React from 'react'
import classes from './header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <nav className={classes.header}>
            <div className={classes.header_logoContainer}>
                <svg width="195" height="51" viewBox="0 0 195 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect y="0.666626" width="195" height="50" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_141010_872" transform="scale(0.00512821 0.02)" />
                        </pattern>
                        <image id="image0_141010_872" width="195" height="50" xlinkHref="data:image/png;base64,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" />
                    </defs>
                </svg>
            </div>
            <ul className={classes.navBar}>
                <li><Link href='/'>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_141010_852)">
                            <path d="M16.25 8.28895V2.63091H13.125V5.24029L10 1.91663L0 12.6309H2.5V21.9166H8.125V14.7738H11.875V21.9166H17.5V12.6309H20L16.25 8.28895Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_141010_852">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.666626)" />
                            </clipPath>
                        </defs>
                    </svg>
                </Link></li>
                <li><Link href='/dashboard/aboutUs'>AboutUs</Link></li>
                <li><Link href='/dashboard/contact'>Contact</Link></li>
                <li><Link href='/dashboard/news'>News</Link></li>
                <li><Link href='/dashboard/projects'>Projects</Link></li>
                <li><Link href='/dashboard/services'>Services</Link></li>
                <li>
                </li>
            </ul>
        </nav>
    )
}

export default Header