'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import IconWithImages from '../IconWithImages/IconWithImages';
import classes from './header.module.css';
import Icon from '../Icon/Icon';
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { usePathname } from 'next/navigation';
import { store } from '@/app/context/context';
import { NAVBAR } from '@/app/utils/constants';

const Header = () => {
    const pathName = usePathname();
    const [openSideBar, setOpenSideBar] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)
    const context = useContext(store)

    const { language, setLanguage }: any = context



    const myRefElement1 = useRef(null);
    const myRefElement2 = useRef(null);

    const handleClickOutsideFn = () => {
        setOpenSideBar(false)
    }

    useOnClickOutside(myRefElement1, handleClickOutsideFn, myRefElement2);

    const handleSideBar = () => {
        setOpenSideBar(!openSideBar)
    }

    useEffect(() => {
        if (openSideBar) {
            setOpenSideBar(false)
        }
    }, [pathName])

    const handleChangeLanguage = () => {
        setLanguage(language === 'spanish' ? 'english' : 'spanish')
    }

    useEffect(() => {
        if (openSideBar) {
            setShowOverlay(true)
        } else {
            setTimeout(() => {
                setShowOverlay(false)
            }, 200)
        }
    }, [openSideBar])


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
                        linkTitles={language === 'english' ? NAVBAR.english : NAVBAR.spanish}
                        withLanguage={language}
                        handleChangeLanguage={handleChangeLanguage}
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
                <div ref={myRefElement1} className={`${classes.mobileNav} ${openSideBar ? classes.open : classes.close}`}>
                    <NavBar
                        withHome={true}
                        hasPipes={false}
                        father='header'
                        linkTitles={language === 'english' ? NAVBAR.english : NAVBAR.spanish}
                        handleSideBar={handleSideBar}
                        handleChangeLanguage={handleChangeLanguage}
                        withLanguage={language}
                    >
                    </NavBar>
                </div>
            </div>
            {showOverlay && (
                <div className={classes.overlay}>
                </div>
            )}
        </>
    )
}

export default Header