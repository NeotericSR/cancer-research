import React from "react"
import { Link } from "react-router-dom"
import "../styles/Navigation.scss"

const Navigation = () => {
    return (
        <div className="topnav">
            <Link className="topnav--active btn" to="/">Home</Link>
            <Link className="btn" to="/description">Descriptions</Link>
            <Link className="btn" to="/images">Images</Link>
        </div>
    )
}
export default Navigation