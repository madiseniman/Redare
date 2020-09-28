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
        <img src={Jason} className="image" id="jason-image" alt="Jason" data-tip data-for="JasonTooltip"/>
            <ReactTooltip id="JasonTooltip" place="top" effect="solid">
                    Jason has significant leadership/management experience <br/>
                    with expertise in environmental policy , ecolabels, <br/>
                    life cycle costing, green procurement and sustainability <br/>
                    strategies. Olof Palme Visiting Professor, Stockholm University;<br/>
                    Distinguished Professor/Associate Dean of Environmental Law, <br/>
                    Pace University (NY); Co-founder of Food Systems Impact <br/>
                    Valuation Initiative (www .foodsivi.org). From Milwaukee/NYC;<br/>
                    living in Stockholm. In charge of team dinner reservations.
            </ReactTooltip>
            <p className="text" id="jason-text"><b>Jason Czarnezki</b> <br/> Co-founder | Chief Executive <br/>Officer </p>

        <img src={David} className="image" id="david-image" alt="David" data-tip data-for="DavidTooltip"/>
            <ReactTooltip id="DavidTooltip" place="top" effect="solid">
                    David is an experienced data and analytics <br/>
                    professional with experience in establishing tech teams <br/>
                    and running agile development at scale. Chief Data Officer/<br/>
                    Head of Information Management at Swedbank. Native Stockholmer,<br/>
                    previously worked in NYC; enjoys racquet sports and Mexican food/culture.

            </ReactTooltip>
        <p className="text" id="david-text"><b>David Huselius</b> <br/> Co-founder | Chief Product <br/> Officer </p>

        <img src={Steven} className="image" id="steven-image" alt="Steven" data-tip data-for="StevenTooltip"/>
            <ReactTooltip id="StevenTooltip" place="top" effect="solid">
                    Steven is an author of graduate mathematics texts, has <br/>
                    developed algorithms used in national security applications. <br/>
                    Senior researcher in Environmental Change Institute, <br/>
                    University of Oxford. Co-founded and leads FoodSIVI. Australian; <br/>
                    poet; takes quality of food and drink seriously.
            </ReactTooltip>
        <p className="text" id="steven-text"><b> Steven Lord </b><br/> Chief Technology Officer </p>

        <img src={Zoey} className="image" id="zoey-image" alt="Zoey" data-tip data-for="ZoeyTooltip"/>
            <ReactTooltip id="ZoeyTooltip" place="top" effect="solid">
                    Zoey currently heads marketing/communications department at <br/>
                    Above, a creative innovation agency. Greek born, American raised. <br/>
                    Lived in the Netherlands, now Stockholm. <br/>

            </ReactTooltip>
        <p className="text" id="zoey-text"><b> Zoey Tsopela </b><br/> Chief Marketing Officer</p>

        <img src={Dylan} className="image" id="dylan-image" alt="Dylan" data-tip data-for="DylanTooltip"/>
            <ReactTooltip id="DylanTooltip" place="top" effect="solid">
                    Dylan is a multidisciplinary artist experienced in studio and <br/>
                    digital arts, print and motion, typefaces to portraiture. <br/>
                    Born/raised in Alaska, lives in NY. Inherited musical<br/>
                    genes and accordion from Irish & Italian grandfathers.

            </ReactTooltip>
        <p className="text" id="dylan-text"><b>Dylan Clancy </b><br/>Chief Design Officer</p>

        <img src={Danielle} className="image" id="danielle-image" alt="Danielle" data-tip data-for="DanielleTooltip"/>
            <ReactTooltip id="DanielleTooltip" place="top" effect="solid">
                    Danielle is a Software Developer, has experience in full <br/>
                    life-cycle systems engineering, research and development, <br/>
                    and works as DevOps Engineer ensuring continuous integration <br/>
                    and delivery pipeline. American with Korean roots living in DC; <br/>
                    lived in Gothenburg; enjoys testing the limits of friends' <br/>
                    willingness to try her cooking.
            </ReactTooltip>
        <p className="text" id="danielle-text"><b>Danielle Chaung </b><br/>Developer</p>

        <img src={Madisen} className="image" id="madisen-image" alt="Madisen" data-tip data-for="MadisenTooltip"/>
            <ReactTooltip id="MadisenTooltip" place="top" effect="solid">
                    Madisen is a Software Developer and former health and wellness <br/>
                    entrepreneur, has experience with app and web development. <br/>
                    Lives in Gothenburg. African-American, former track athlete, <br/>
                    rock-climber.

            </ReactTooltip>
        <p className="text" id="madisen-text"><b>Madisen Whitfield</b><br/> Developer</p>

        <img src={Omar} className="image" id="omar-image" alt="Omar" data-tip data-for="OmarTooltip"/>
            <ReactTooltip id="OmarTooltip" place="top" effect="solid">
                    Omar is an Environmental Engineer from Mexico, has expertise in <br/>
                    energy systems, biotechnology, air pollution, water treatment and<br/>
                    waste management. During his time in the business segment of chemical <br/>
                    biorefineries as a Research Engineer, he developed processes to<br/>
                    produce high-value products from a non-conventional resource<br/>
                    (microalgae). He now lives in sweden Sweden to resume his professional<br/>
                    career in environmental science. Passionate about traveling, discovering<br/>
                    new cultures, and enjoying nature's splendour.
            </ReactTooltip>
            <p className="text" id="omar-text"><b>Omar Corona Gonzales </b><br/>Environmental Engineer </p>
    </team>
);