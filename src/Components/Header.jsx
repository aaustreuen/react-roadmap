import React from "react";
import {HomeOutlined} from '@ant-design/icons'
import {NavLink} from 'react-router-dom'
import '../App.css'



const Header = () => {
    return (<>
        <div className="header-block">
        <NavLink to='/' className={({ isActive }) => isActive ? 'active-link': 'notactive-link'}>
       <HomeOutlined/>
        </NavLink>
            <h1 className="header-title">
                Теоретические материалы React
            </h1>
        </div>
    </>
    )
}

export default Header;