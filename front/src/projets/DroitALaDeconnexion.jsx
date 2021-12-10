import React from "react";
import './DroitALaDeconnexion.scss';

export const DroitALaDeconnexion = () => {
    return (
        <div className="DroitALaDeconnexion">
            <h1>Droit à la Déconnexion</h1>

            <img
                className="imgProjetDeconnexion"
                src="https://res.cloudinary.com/dsxb2uyct/image/upload/v1572988106/droit_a_la_deconnexion_adifre.png"
                alt="First slide"
            />

            <p>
                Le site a pour objectif de répertorier et classer les entreprises qui pratiquent le droit à la déconnexion.
                L’implication des entreprises sera donc évaluée par les salariés eux-mêmes, le classement est ainsi dynamique (mise en valeur du top 10) et évolue au fil des avis utilisateurs.
            </p>

            <p>Ce fut le projet le plus conséquent durant ma fomration à la Wild Code School.</p>
            <p>Il consistait à créer une application pour un client entrepreneur.</p>
            <p>Durant ce projet, nous étions 6 développeurs.</p>
            <p>Nous travaillions avec la méthode agile et scrum. A tour de rôle, nous échangions le rôle de scrum master et de producter owner.</p>
            <p>Les technologies utilisées étaient <span className="bold">React</span> et <span className="bold">Nodejs</span>.</p>
            <a href="https://github.com/WildCodeSchool/bordeaux-0219-js-calldoor">github</a>
        </div>
    )
}