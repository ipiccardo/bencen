'use client'

import React from 'react'
import NavBar from '../Footer/NavBar/NavBar';
import IconWithImages from '../IconWithImages/IconWithImages';
import classes from './header.module.css';
import Icon from '../Icon/Icon';

const Header = () => {

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
                <div className={classes.header__hamburguerMenu__toggleButton}>
                    <Icon name='hamburguer' size={30} />
                </div>
            </div>
        </>
    )
}

export default Header