import React, { useEffect } from 'react';
import anime from 'animejs';
import './Navbar.scss';

export const Navbar = () => {

    const items = [
        {
            id: 1,
            title: 'Biographie',
        }
        ,
        {
            id: 2,
            title: 'Formation',
        },
        {
            id: 3,
            title: 'Projets',
        }
    ]

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
            {items.map(item => <div className="item">{item.title}</div>)}
        </div>
    )
}