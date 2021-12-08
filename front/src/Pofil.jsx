import React, { useEffect } from 'react';
import anime from 'animejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { portfolio } from './actions/clicked';
import './Profil.scss';

const Profil = () => {
    const dispatch = useDispatch();
    const porfolioFunction = () => dispatch(portfolio());

    const wrapper = () => {
        const textWrapper = document.getElementsByClassName('letters');
        for(let i = 0; i < textWrapper.length; i++) {
            textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        };
    };

    const displayPortfolio = () => {
        porfolioFunction();
    };

    useEffect(() => {
        wrapper();
        anime.timeline()
        .add({
            targets: '.name',
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '.words .word1',
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '.words .word2',
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '.words .word3',
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '.words .word4',
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '.words .word5',
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '.studies .letter',
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 750,
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i
        })
        .add({
            targets: '.giphy-embed',
            opacity: [0, 1],
            scale: [0.2, 1],
            easing: 'easeInOutSine',
        });

        anime.timeline({direction: 'linear',})
        .add({
        targets: '.arrow',
        opacity: [0, 1],
        translateY: 30,
        direction: 'alternate',
        easing: 'easeInOutSine',
        delay: 8500,
        complete: () => {
            anime.timeline({loop: true, direction: 'alternate',})
            .add({
            targets: '.arrow',
            opacity: [1, 0],
            translateY: -10,
            direction: 'alternate',
            easing: 'easeInOutSine',
            delay: 500,
            });
        },
        })
    }, []);

    return (
        <div className="Profil">
            <h1 className="name">Martin PEUBEY</h1>
            <div className="studies">
                <span className="text-wrapper">
                    <span className="letters">- Le Wagon (Lyon 2017)</span>
                </span>
                <br/>
                <span className="text-wrapper">
                    <span className="letters">- Wild Code School (Bordeaux 2019)</span>
                </span>
                    
            </div>
            <div className="words">
                <p>
                    <span className="word1">Autonome, </span>
                    <span className="word2">Perseverant, </span>
                    <span className="word3">Curieux, </span>
                    <span className="word4">Apprendre</span>
                    <br/>
                    <span className="word5">sont mes maître mots.</span>
                </p>
            </div>
            <iframe src="https://giphy.com/embed/26tn33aiTi1jkl6H6" frameBorder="0" className="giphy-embed" allowFullScreen title="code"></iframe><p><a href="https://giphy.com/gifs/screen-monitor-closeup-26tn33aiTi1jkl6H6"></a></p>
            <div className="arrow" onClick={() => displayPortfolio()}>
                <FontAwesomeIcon icon={faArrowDown} size="2x"/>
            </div>
        </div>
    );
};

export default Profil;