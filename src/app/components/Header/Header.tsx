'use client'

import React, { useState } from 'react'
import NavBar from '../Footer/NavBar/NavBar';
import IconWithImages from '../IconWithImages/IconWithImages';
import classes from './header.module.css';
import Icon from '../Icon/Icon';

const Header = () => {

    const [openSideBar, setOpenSideBar] = useState(false)


    const handleSideBar = () => {
        setOpenSideBar(!openSideBar)
    }



    return (
        <>
            <div className={classes.header}>
                <div>
                    <IconWithImages name='logo' size={150} />
                </div>
                <div>
                    <NavBar
                        withHome={true}
                        hasPipes={false}
                        linkTitles={["About Us", "Services", "Projects", "News", "Contact"]}
                    />
                    <div>
                        <IconWithImages name='language' size={30} />
                    </div>
                </div>
            </div>
            <div className={classes.header__hamburguerMenu}>
                <div>
                    <IconWithImages name='logo' size={150} />
                </div>
                <div className={classes.header__hamburguerMenu__toggleButton} onClick={handleSideBar}>
                    <Icon name='hamburguer' size={30} />
                </div>
                <nav className={`${classes.mobileNav} ${openSideBar ? classes.open : ''}`}>
                    <ul className={classes.mobileNavItems}>
                        <li className={classes.mobileNavItem}>
                            About Us
                        </li>
                        <li className={classes.mobileNavItem}>
                            Services
                        </li>
                        <li className={classes.mobileNavItem}>
                            Projects
                        </li>
                        <li className={classes.mobileNavItem}>
                            News
                        </li>
                        <li className={classes.mobileNavItem}>
                            Contact
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header