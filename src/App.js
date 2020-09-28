import React from 'react';
import logo from './Assets/logo.svg';
import twitter from './Assets/FooterIcons/twitter.svg';
import linkedin from './Assets/FooterIcons/linkedin.svg';
import email from './Assets/FooterIcons/email.svg';
import Carousel from './Components/Carousel';
import Team from './Components/Team';
import TeamMap from './Components/TeamMap';
import MailButton from './Components/EmailButton';
import SignUpButton from './Components/SignUpButton';
import './CSS/App.css';

function App() {

    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <p className="tag-line">Everyday purchasing made sustainable.</p>
                <p className="header-body">
                    Using human experts, product data, and AI, our <br/>
                    tech enables retailers to empower and guide <br/>
                    their consumers towards making more sustainable choices.
                </p>
            </header>
            <body className="app-body">
            <Carousel/>
            <div>
                <p className="body-header">Redare’s founders are passionate that products valued and purchased by
                    consumers and <br/>
                    retailers for being “sustainable” should make differences at scale to people and planet.</p>
                <p className="body-text">Given the importance of demand-side intervention, Redare has a long-term vision
                    for using core sustainability data and its ranking <br/>
                    engine, as well as gamification, consumer psychology and food informatics. Integrating Redare with
                    online retail environments <br/>
                    offers opportunities for tracking individual customers, rewards for footprint reduction,
                    gamification of customer nudging, and <br/>
                    education. We envision a possibilities to create engagement with consumers through retailers and
                    directly with the Redare app <br/>
                    once core trust and relationships are built.</p>
            </div>
            <Team/>
            <TeamMap/>
            <text className="sign-up-text">Stay updated with our progress here:</text>
            <SignUpButton/>
            <text className="meet-us">Meet Us</text>
            <MailButton/>
            <footer className="app-footer">
                <text className="footer-text">© 2020, Redare AB</text>
                <div className="footer-icons">
                    <a href="https://twitter.com/RedareTeam" target="_blank"><img src={twitter}
                                                                                  className="footer-twitter"
                                                                                  alt="twitter"/></a>
                    <a href="https://www.linkedin.com/company/redare-ab/" target="_blank"><img src={linkedin}
                                                                                               className="footer-linkedin"
                                                                                               alt="linkedin"/></a>
                    <a href="mailto:hello@redareapp.com"><img src={email} className="footer-email" alt="email"/></a>
                </div>
            </footer>
            </body>
        </div>
    );
}

export default App;
