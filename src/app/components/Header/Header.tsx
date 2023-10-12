import React from 'react'
import NavBar from '../Footer/NavBar/NavBar';
import IconWithImages from '../IconWithImages/IconWithImages';
import classes from './header.module.css';

const Header = () => {
    return (
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
    )
}

export default Header