import React from 'react';
import './Retrocade.scss'

export const Retrocade = () => {
    return (
        <div className="Retrocade">
            <h1>Retrocade</h1>
            <img
                className="imgRetrocade"
                src="https://res.cloudinary.com/dsxb2uyct/image/upload/v1572988110/retrocade_rdqbxk.png"
                alt="Second slide"
            />

            <p>Ce fût le second projet à la Wild Code school.</p>
            <p>Nous étions 4 développeurs à s'occuper du projet.</p>
            <p>L'objectif de cette application était de réaliser a faire de la pub sur un jeu vidéo.</p>
        </div>
    )
}