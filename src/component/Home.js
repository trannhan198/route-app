import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/about">featured galleries</Link>
            </nav>
        </div>
    )
}

export default Home
