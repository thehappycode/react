import React from 'react';

 const Hero = ({children, hero}) => {
    // Hero.defaultProps = {
    //     hero: "defaultHero"
    // }
    return (
        <header className={hero || "defaultHero"}>
            {children}
        </header>
    )
}
export default Hero;