import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import './Navbar.scss';

export const Navbar = () => {

    useEffect(() => {
        anime.timeline({loop: false, direction: 'linear'})
        .add({
            targets: '.Navbar',
            translateY: 0,
            opacity: 1,
            duration: 800,
            easing: 'easeInOutSine',
        });
    }, []);

    return (
        <div className="Navbar">
            <Link to="/biographie">Biographie</Link>
            <Link to="/formation">Formation</Link>
            <Link to="/projets">Projets</Link>
        </div>
    )
}