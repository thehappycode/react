import React from 'react';
import {Hero, Banner, RoomContainer} from './../components';
import { Link } from 'react-router-dom';

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms" subtitle="">
                <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>
    );
}

export default Rooms
