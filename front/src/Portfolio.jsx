import React, { useEffect } from 'react';
import anime from 'animejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import './Portfolio.scss'
import { arrowTimeAction } from './actions/arrowTime';
import Snake from './Snake';

export const Portfolio = () => {
    const dispatch = useDispatch();
    const arrowTimeFunction = () => dispatch(arrowTimeAction());
    const arrowTime = useSelector(state => state.arrowTime.arrowTime);

    useEffect(() => {
        anime.timeline({loop: false, direction: 'linear'})
        .add({
            targets: '.title',
            translateY: -100,
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '.title',
            opacity: 0,
            translateY: -300,
            duration: 800,
            easing: 'easeInOutSine',
            delay: 1000,
            complete: () => {
                anime.timeline({loop: false})
                .add({
                    targets: ['.arrowUp', '.arrowDown', '.droitDeconnexion', '.retrocade'],
                    opacity: 1,
                    easing: 'easeInOutSine',
                });
                arrowTimeFunction();
            }
        });
    });

    return (
        <div>
            {arrowTime
                ? <div className="Portfolio">
                        <Snake className="snake" />
                    <div className="arrowUp">
                        <FontAwesomeIcon icon={faArrowUp} size="2x"/>
                    </div>
                    <div className="scrapy">
                            
                    </div>
                    <div className="droitDeconnexion">
                        <a href="#">
                            <img src="https://res.cloudinary.com/dsxb2uyct/image/upload/v1572988106/droit_a_la_deconnexion_adifre.png" alt="Droit à la Déconnexion"/>
                        </a>
                    </div>
                    <div className="retrocade">
                        <a href="#">
                            <img src="https://res.cloudinary.com/dsxb2uyct/image/upload/v1572988110/retrocade_rdqbxk.png" alt="Retrocade"/>
                        </a>
                    </div>
                    <div className="arrowDown">
                        <FontAwesomeIcon icon={faArrowDown} size="2x"/>
                    </div>
                  </div>
                : <div className="Portfolio">
                    <h1 className="title">My Projects</h1>
                </div>
            }
        </div>
    )
};