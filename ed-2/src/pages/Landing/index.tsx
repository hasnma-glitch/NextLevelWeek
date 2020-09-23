import React from 'react';

import logoImg from '.../assets/images/logo.svg';
import landing from '.../assets/images/landing.svg';
import studyIcon from '.../assets/images/study.svg';
import giveClassesIcon from '.../assets/images/give-classes.svg';
import purpleHeartIcon from '.../assets/images/purple-heart.svg';
import './styles.css';

function Landing() {
    return (
        <div id="page-lading">
            <div className="logo-container">
                <img src="{logoImg}" alt="Proffy" />
                <h2>Sua plataforma online.</h2>
            </div>

            <img src="{landingImg}" alt="Plataforma de estudos" className="hero-image" />
            
            <div className="button-container">
                <a href="" className="study">
                    <img src="{giveClassesIcon}" alt="Estudar" />
                    Estudar
                </a>
            </div>
            <span className="total-connections">
                Total de 200 conexões ja realizadas <img src="{purpleHeartIcon}" alt="Coração roxo"/>
            </span>
        </div>
    );

export default Landing;