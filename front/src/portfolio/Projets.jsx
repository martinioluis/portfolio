import React,  { useEffect } from 'react';
import anime from 'animejs';
import { useDispatch, useSelector } from 'react-redux';
import { arrowTimeAction } from '../actions/arrowTime';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Projets.scss'

export const Projets = () => {
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

    const projects = [
        {
            id: 1,
            className: 'droitDeconnexion',
            href: '#',
            src: 'https://res.cloudinary.com/dsxb2uyct/image/upload/v1572988106/droit_a_la_deconnexion_adifre.png',
            alt: 'Droit à la Déconnexion',
        },
        {
            id: 2,
            className: 'retrocade',
            href: '#',
            src: 'https://res.cloudinary.com/dsxb2uyct/image/upload/v1572988110/retrocade_rdqbxk.png',
            alt: 'Retrocade',
        }
    ]

    return (
        <div className="Projects">
            <h2>Mes projets:</h2>
            <Carousel>
                <Carousel.Item>
                    <Link to="/DroitALaDeconnexion">
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dsxb2uyct/image/upload/v1572988106/droit_a_la_deconnexion_adifre.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Droit à la Déconnexion</h3>
                    </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/Retrocade">
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dsxb2uyct/image/upload/v1572988110/retrocade_rdqbxk.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Retrocade</h3>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/RoadAccidentFrance">
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dsxb2uyct/image/upload/v1587395715/Screen_Shot_2020-04-20_at_17.13.17_jkzwkj.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Road Accident France</h3>
                    </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}