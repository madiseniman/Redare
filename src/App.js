import React from 'react';
import keyDiff from './Assets/keyDiff.svg';
import experts from './Assets/experts.svg';
import productReccomend from './Assets/productReccomend.svg';
import productInfoAlert from './Assets/productInfoAlert.svg';
import product from './Assets/product.svg';
import greenwashing from './Assets/greenwashing.svg';
import expertGlass from './Assets/expertGlass.svg';
import productRanking from './Assets/productRanking.svg';
import externalData from './Assets/externalData.svg';
import calibrationWeight from './Assets/calibrationWeight.svg';
import keyDiff2 from './Assets/keyDiff2.svg';
import redBottle from './Assets/redBottle.svg';
import userData from './Assets/userData.svg';
import bananas from './Assets/bananas.svg'
import logo from './Assets/logo.svg';
import twitter from './Assets/twitter.svg';
import linkedin from './Assets/linkedin.svg';
import email from './Assets/email.svg';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import './App.css';
//make the carosel its own component and set autoplay to true
//make map it's own componen as well. 

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 9
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};


function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-desc">
          Using human experts, product data, and AI, our <br/>
          tech enables retailers to empower and guide <br/>
          their consumers towards making more sustainable choices.
        </p>
      </header>
        <body className="App-body">
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <div>
            <Carousel responsive={responsive}>
                <div><img src={keyDiff} alt="keyDiff"/></div>
                <div><img src={experts} alt="experts"/></div>
                <div><img src={productReccomend} alt="productReccomend"/></div>
                <div><img src={productInfoAlert} alt="productInfoAlert"/></div>
                <div><img src={product} alt="product"/></div>
                <div><img src={greenwashing} alt="greenwashing"/></div>
                <div><img src={expertGlass} alt="expertGlass"/></div>
                <div><img src={productRanking} alt="productRanking"/></div>
                <div><img src={externalData} alt="externalData"/></div>
                <div><img src={calibrationWeight} alt="calibrationWeight"/></div>
                <div><img src={keyDiff2} alt="keyDiff2"/></div>
                <div><img src={redBottle} alt="redBottle"/></div>
                <div><img src={userData} alt="userData"/></div>
                <div><img src={bananas} alt="bananas"/></div>
            </Carousel>;
        </div>
        <div>
            <p>stuff</p>
            <p>more stuff</p>
        </div>
            <div>
                <ReactPlayer
                    //change video link
                    url="https://www.youtube.com/watch?v=ug50zmP9I7s"/>
            </div>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <div>
            //team with map and lines
        </div>
        </body>
        <footer className="App-footer">

            <text className="Footer-text">© 2020, Redare AB </text>

            <div className="Footer-icons">
            <img src={twitter} className="Footer-twitter" alt="twitter"/>
            <img src={linkedin} className="Footer-linkedin" alt="linkedin"/>
            <img src={email} className="Footer-email" alt="email"/>
            </div>
        </footer>
    </div>

  );
}

export default App;
