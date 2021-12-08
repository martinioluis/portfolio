import React from 'react';
import './Formation.scss'

export const Formation = () => {
    return (
        <div className="Formation">
            <div className="content">
                <div className="leWagon">
                    <h2>
                        Je me suis formé en 2017 à <div className="bold">Le Wagon</div> Lyon:
                    </h2>

                    <p>
                        Durant 9 semaines intensives, j’ai pu apprendre différent concept:

                    </p>
                    <p>
                        <div className="bold">- outils et worflow de développeurs:</div>
                        Travailler avec des outils et les méthodes utilisés par les développeurs. Apprendre les bases de ligne de commande, à utiliser un éditeur de text pour coder, installer Ruby et un outil de versionning (git/github)
                    </p>
                    <p>
                        <div className="bold">- programmation en Ruby:</div>
                        Ecrire des programmes qui manipulent des variables, des boucles, des conditions et des structures de données (Array, Hash). Détecter des patterns de textes grâces aux pressions régulières (regex) et passer des données depuis des fichiers structurés (CSV, JSON, XML, HTML), en utilisant le scraping web ou en construisant des requêtes à partir d’une API.
                    </p>
                    <p>
                        <div className="bold"> - architecture logicielle:</div>
                        Structurez le code en applicant les concepts de la programmation orentié-objet. Apprendre l’architecture MVC (Model View Controller) en codant plusieurs logiciels MVC soi-même. On a codé ces logiciels en intégralité, en simulant même la base de données à partir de fichiers VSC.
                    </p>
                    <p>
                        <div className="bold">- base de données, SQL, ORM:</div>
                        Apprendre à concevoir un schéma de base de données relationnelle et construire des requêtes structurées avec SQL pour récupérer des données. Maîtrisez les requêtes CRUD (Create, Read, Update, Delete) et les requêtes plus avancées avec JOIN. Connecter sa base de données à son logiciel Ruby avec un ORM (Object Relational Mapping) appelé Active Record.
                    </p>
                    <p>
                        <div className="bold">Une journée au Wagon:</div>

                        Cours, challenges, yoga, live-coding, événement.
                    </p>
                </div>

                <div className="WildCodeSchool">
                    <h2>
                        J'ai egalement fait la <div className="bold">Wild Code School</div> à Bordeaux.
                    </h2>
                    <p>
                        Durant cette formation, j’ai pu apprendre différent concepts concernant:
                    </p>
                    <p>
                        <div className="bold">- apprendre à concevoir une application web:</div>
                        . Une application doit être à la fois agréable, avec une belle interface graphique, et efficace grâce à une mise en page intelligente et ergonomique.
                        . Apprendre à coder, c’est d’abord apprendre à concevoir  une application fonctionnelle et performante pour répondre aux besoins du client.
                    </p>
                    <p>
                        <div className="bold">- comprendre comment intégrer une interface utilisateur:</div>
                        . Pour rendre les pages web dynamiques et interactives, je me suis spécialisé dans un langage de programmation et une framework d’application: Javascript, React / Node
                        . Apprendre à utiliser une API, concevoir une Base de Données, écrire et optimiser les requêtes SQL. Et bien sûr à écrire du code lisible et maintenable.
                    </p>
                    <p>
                        <div className="bold">- continuer a se perfectionner comme développeur:</div>
                        . Apprendre à coder n’est que la 1ère étape. Rejoindre une communauté solidaire et soudée.
                    </p>
                    <p>
                        Semaine type:
                        Nous avions des quêtes/exercice à réaliser par nous mêmes, on avais la possibilité de s’entraider en cas de besoin. Un cours en début de semaine après les quêtes. 2 dojos dans la semaine et un live coding.
                    </p>
                </div>
            </div>
        </div>
    )
}