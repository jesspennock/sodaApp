import React from "react";
import HeroSection from "../components/HeroSection.jsx"
import {Link} from 'react-router-dom'

const HomeScreen = () => {
return (
    <div className = "main-page">
        <HeroSection />
        <Link to="/order">
        <button>Create Custom Order</button>
        </Link>
        <h2>Our All-Time Faves</h2>
    </div>
)
}
export default HomeScreen