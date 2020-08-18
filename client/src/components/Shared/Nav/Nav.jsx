import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">Blog App</NavLink>
                <div className="links">
                    <NavLink className="link" to="/products">Posts</NavLink>
                    <NavLink className="link" to="/add-product">Add Blog Posts</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav