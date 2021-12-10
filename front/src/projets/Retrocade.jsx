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

            <p>Ce fut le second projet à la Wild Code school.</p>
            <p>Nous étions 4 développeurs à nous occuper du projet.</p>
            <p>L'objectif de cette application était de concevoir une pub pour un jeu vidéo.</p>
        </div>
    )
}