import React from "react";

const HeroSection = () => {
    const sectionStyle = {
        background: 'linear-gradient(190deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/14/1/FNM_060115-Insert-No4-Rhubarb-Soda_s4x3.jpg.rend.hgtvcom.616.462.suffix/1431615720548.jpeg)',
        backgroundSize: 'cover'
    }
    return (
        <div className = "hero" style={sectionStyle}>
            <h2> Try Our New Favorite </h2>
            <h2 className = "big-title">Summer Nights</h2>
            <button>Try it Today</button>
        </div>
    )
}

export default HeroSection