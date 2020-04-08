import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { clickedAction, portfolio } from './actions/clicked';
import Neon from './Neon';
import NeonPhone from './NeonPhone';
import './Intro.scss';

const Intro = () => {
  const [arrow, setArrow] = useState(true);
  const clicked = useSelector(state => state.clicked);
  const dispatch = useDispatch();
  const clickedFunction = () => dispatch(clickedAction());
  const portfolioFunction = () => dispatch(portfolio());

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });

  const displayProfil = () => {
    deleteDisplay();
    clickedFunction();
    portfolioFunction();
    setArrow(!arrow);
  };

  const deleteDisplay = () => {
    anime.timeline()
    .add({
      targets: ['.hello', '.developer', '.name'],
      translateY: -150,
      easing: 'easeInOutSine',
    });

    anime.timeline({loop: arrow, direction: 'linear',})
    .add({
      targets: '.arrow',
      translateY: 140,
      opacity: 0,
      easing: 'easeInOutSine',
      complete: () => {
        anime.timeline({loop: arrow, direction: 'linear',})
        .add({
          targets: '.arrow',
          translateY: 140,
          opacity: 0,
          easing: 'easeInOutSine',
        });
      },
    });
  };

  const displayForPhoneAndTablet = () => {
    anime.timeline()
    .add({
      targets: '.hello',
      opacity: [0, 1],
      translateY: 50,
      easing: 'easeOutElastic',
      duration: 2000,
    })
    .add({
      targets: '.developer',
      opacity: [0, 1],
      scale: [0.2, 1],
      duration: 800,
      complete: () => {
        anime.timeline({loop: true})
        .add({
          targets: '.neonPhone',
          opacity: [0, 1],
          easing: 'easeInOutSine',
          duration: 1000,
          delay: 1000,
        });
      }
    })
    .add({
      targets: '.name',
      opacity: [0, 1],
      translateY: -70,
      easing: 'easeOutElastic',
    })
    .add({
      targets: '.arrow',
      opacity: [0, 1],
      translateY: -10,
      direction: 'alternate',
      easing: 'easeInOutSine',
      delay: 500,
      complete: () => {
        anime.timeline({loop: true, direction: 'alternate'})
        .add({
          targets: '.arrow',
          opacity: [0, 1],
          translateY: 10,
          direction: 'alternate',
          easing: 'easeInOutSine',
        });
      },
    });
  }

  const displayForLaptop = () => {
    anime.timeline()
    .add({
      targets: '.hello',
      translateY: 150,
      translateX: 150,
      easing: 'easeOutElastic',
      duration: 2000,
    })
    .add({
      targets: '.developer',
      opacity: 1,
      translateY: '30vh',
      easing: 'easeOutElastic',
      duration: 2000,
      complete: () => {
        anime.timeline({loop: true, direction: 'linear'})
        .add({
          targets: '.neon',
          opacity: [0, 1],
          easing: 'easeInOutSine',
          duration: 1000,
          delay: 1000,
        });
      }
    })
    .add({
      targets: '.name',
      opacity: 1,
      translateY: '30vh',
      easing: 'easeOutElastic',
      duration: 2000,
    });

    anime.timeline({direction: 'linear',})
    .add({
      targets: '.arrow',
      opacity: [0, 1],
      translateY: 30,
      direction: 'alternate',
      easing: 'easeInOutSine',
      delay: 6000,
      complete: () => {
        anime.timeline({loop: arrow, direction: 'alternate',})
        .add({
          targets: '.arrow',
          opacity: [1, 0],
          translateY: -10,
          direction: 'alternate',
          easing: 'easeInOutSine',
          delay: 500,
        });
      },
    });
  }

  useEffect(() => {
    if(isTabletOrMobile) {
      displayForPhoneAndTablet();
    } else {
      displayForLaptop();
    }
  }, []);



  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  return (
      <div className="Intro">
        <div className="hello">...HELLO WORLD!</div>
        <h1 className="developer">
          <Desktop><Neon className="neon"/></Desktop>
          <Mobile><NeonPhone className="neonPhone"/></Mobile>
          <div>Développeur Fullstack</div>
          <Mobile><NeonPhone className="neonPhone"/></Mobile>
          <Desktop><Neon className="neon"/></Desktop>
        </h1>
        <h3 className="name">Martin PEUBEY</h3>
        <div className="arrow" onClick={() => displayProfil()}>
          <FontAwesomeIcon icon={faArrowDown} size="2x"/>

      </div>
    </div>
  )
} 

export default Intro;