import React from "react";
import ReactTooltip from "react-tooltip";
import '../CSS/team.css'
import Jason from "../Assets/Team/Jason.svg";
import David from "../Assets/Team/David.svg";
import Steven from "../Assets/Team/Steven.svg";
import Zoey from "../Assets/Team/Zoey.svg";
import Dylan from "../Assets/Team/Dylan.svg";
import Danielle from "../Assets/Team/Danielle.svg";
import Madisen from "../Assets/Team/Madisen.svg";
import Omar from "../Assets/Team/Omar.svg";

export default () => (
    <team>
        <div id="team-text">
            <text data-tip data-for="MeetTeamTooltip">Meet the Team</text>
            <ReactTooltip id="MeetTeamTooltip" place="top" effect="solid" offset="{'top': 42, 'right': 15}">
                Our team has a unique combination of sustainability expertise and the ability to translate <br/>
                this expertise through scaled business and technology product development into a powerful <br/>
                recommendation engine that solves an urgent problem on the market.
            </ReactTooltip>
        </div>
        <img src={Jason} className="image" id="jason-image" alt="Jason" data-tip data-for="JasonTooltip"/>
        <ReactTooltip id="JasonTooltip" place="top" effect="solid" offset="{'top': 42}">
            Co-Founder, CEO and sustainability expert, Jason Czarnezki, has <br/>
            significant leadership and management experience, and is a researcher<br/>
            in environmental law, natural resources policy, eco-labels, life-cycle <br/>
            analysis, sustainable and green procurement law and policy and <br/>
            sustainable business strategies
        </ReactTooltip>
        <p className="text" id="jason-text"><b>Jason Czarnezki</b> <br/> Co-founder | Chief Executive Officer </p>

        <img src={David} className="image" id="david-image" alt="David" data-tip data-for="DavidTooltip"/>
        <ReactTooltip id="DavidTooltip" place="top" effect="solid" offset="{'top': 42}">
            Co-Founder and Chief Product Officer David Huselius, is an experienced <br/>
            data and analytics professional with long experience of establishing <br/>
            large tech teams and running agile development at scale.
        </ReactTooltip>
        <p className="text" id="david-text"><b>David Huselius</b> <br/> Co-founder | Chief Product <br/> Officer </p>

        <img src={Steven} className="image" id="steven-image" alt="Steven" data-tip data-for="StevenTooltip"/>
        <ReactTooltip id="StevenTooltip" place="top" effect="solid" offset="{'top': 42}">
            Steven Lord, CTO, is a senior researcher working on food system and <br/>
            economic modeling for sustainability, risk and resilience. He has a <br/>
            quantitative background, being the author of two graduate mathematics <br/>
            texts, and has developed algorithms and software for national security <br/>
            decision-making. He co-founded and currently leads a business and academic <br/>
            co-sponsored initiative on the costs of food systems impact and market <br/>
            corrections for the agri-food sector.
        </ReactTooltip>
        <p className="text" id="steven-text"><b> Steven Lord </b><br/> Chief Technology Officer </p>

        <img src={Zoey} className="image" id="zoey-image" alt="Zoey" data-tip data-for="ZoeyTooltip"/>
        <ReactTooltip id="ZoeyTooltip" place="top" effect="solid" offset="{'top': 42}">
            Zoey Tsopela, Chief Marketing Officer, is a passionate believer <br/>
            in the power of human stories and has dedicated her career to <br/>
            identifying and sharing meaningful narratives in an oversaturated <br/>
            world. She has helped build successful marketing departments and <br/>
            strategic and tactical plans for both external and internal <br/>
            communications.
        </ReactTooltip>
        <p className="text" id="zoey-text"><b> Zoey Tsopela </b><br/> Chief Marketing Officer</p>

        <img src={Dylan} className="image" id="dylan-image" alt="Dylan" data-tip data-for="DylanTooltip"/>
        <ReactTooltip id="DylanTooltip" place="top" effect="solid" offset="{'top': 62}">
            Dylan Clancy, Chief Design Officer, is a multidisciplinary artist who draws, <br/>
            designs, animates, films, researches, composes. He is owner of the graphic <br/>
            design firm in New York.
        </ReactTooltip>
        <p className="text" id="dylan-text"><b>Dylan Clancy </b><br/>Chief Design Officer</p>

        <img src={Danielle} className="image" id="danielle-image" alt="Danielle" data-tip data-for="DanielleTooltip"/>
        <ReactTooltip id="DanielleTooltip" place="top" effect="solid" offset="{'top': 62}">
            Danielle Chaung, Developer, has experience in full life cycle system <br/>
            engineering, research and development, and currently works as a DevOps <br/>
            Engineer where her focus is ensuring a continuous integration and continuous <br/>
            delivery pipeline.
        </ReactTooltip>
        <p className="text" id="danielle-text"><b>Danielle Chaung </b><br/>Developer</p>

        <img src={Madisen} className="image" id="madisen-image" alt="Madisen" data-tip data-for="MadisenTooltip"/>
        <ReactTooltip id="MadisenTooltip" place="top" effect="solid" offset="{'top': 62}">
            Madisen Whitfield, Developer, a former health and wellness entrepreneur, has <br/>
            experience with app and web development, is passionate about finding creative <br/>
            solutions to everyday problems.
        </ReactTooltip>
        <p className="text" id="madisen-text"><b>Madisen Whitfield</b><br/> Developer</p>

        <img src={Omar} className="image" id="omar-image" alt="Omar" data-tip data-for="OmarTooltip"/>
        <ReactTooltip id="OmarTooltip" place="top" effect="solid" offset="{'top': 62}">
            Omar Corona González, Environmental Engineer, has expertise in energy systems, <br/>
            biotechnology, air pollution, water treatment and waste management, and significant <br/>
            experience in life cycle assessments, modeling environmental data and sustainability <br/>
            research.
        </ReactTooltip>
        <p className="text" id="omar-text"><b>Omar Corona Gonzales </b><br/>Environmental Engineer </p>
    </team>
);