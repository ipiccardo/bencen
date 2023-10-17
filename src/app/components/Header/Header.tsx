'use client'

import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import IconWithImages from '../IconWithImages/IconWithImages';
import classes from './header.module.css';
import Icon from '../Icon/Icon';
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathName = usePathname();

    const myRefElement1 = useRef(null);
    const myRefElement2 = useRef(null);


    const [openSideBar, setOpenSideBar] = useState(false)

    const handleClickOutsideFn = () => setOpenSideBar(false)

    useOnClickOutside(myRefElement1, handleClickOutsideFn, myRefElement2);

    const handleSideBar = () => {
        setOpenSideBar(!openSideBar)
    }

    useEffect(() => {
        if (openSideBar) {
            setOpenSideBar(false)
        }
    }, [pathName])



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
                        withLanguage={true}
                    />
                </div>
            </div>
            <div className={classes.header__hamburguerMenu}>
                <div>
                    <IconWithImages name='logo' size={150} />
                </div>
                <div className={classes.header__hamburguerMenu__toggleButton} onClick={handleSideBar}>
                    <Icon name='hamburguer' size={30} />
                </div>
                <div ref={myRefElement1} className={`${classes.mobileNav} ${openSideBar ? classes.open : ''}`}>
                    <NavBar
                        withHome={true}
                        hasPipes={false}
                        father='header'
                        linkTitles={["About Us", "Services", "Projects", "News", "Contact"]}
                        withLanguage={true}
                        handleSideBar={handleSideBar}
                    >
                    </NavBar>
                </div>
            </div>
            {openSideBar && (
                <div className={classes.overlay}>
                </div>
            )}
        </>
    )
}

export default Header