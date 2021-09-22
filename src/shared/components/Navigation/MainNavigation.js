import React from 'react'
import { Link } from 'react-router-dom'


import './MainNavigation.css'


import MainHeader from './MainHeader'

const MainNavigation = () => {
    return (
        <MainHeader >
            <button >
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link> Your Places </Link></h1>

            <nav>
                ....
            </nav>
        </MainHeader>
    )
}

export default MainNavigation
