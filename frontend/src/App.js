import { useEffect, useState, useLayoutEffect } from "react";
import Background1 from './ready-html/img/layer-base.png';
import Background2 from './ready-html/img/layer-front.png';
import Background3 from './ready-html/img/layer-middle.png';
import Dungion from './ready-html/img/dungeon.jpg';
import './ready-html/css/main.css';
import { createContext } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist//ScrollSmoother";

function App({ Component, pageProps }) {
  const SmootherContext = createContext();
  let [smoother, setSmoother] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(()=>{
    const onScroll = (e) => {
      setScrollPosition(e.target.documentElement.scrollTop);
      
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  },[scrollPosition])
  
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    smoother = ScrollSmoother.create({
    wrapper:'#smooth-wrapper',
    content:'#smooth-content',
    smooth: 3,
    effects: true,
  });
  smoother.effects("img", {speed:"auto"})
 },[])
 document.body.style.cssText=`--scrollTop: ${scrollPosition}px; height: 1570px;`
 
  return (
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <header className="main-header">
            <div className="layers">
              <div className="layer__header">
                <div className="layers__caption">Welcome to Parallax</div>
                <div className="layers__title">Fairy Forest</div>
              </div>
              <div className="layer layers__base" style={{backgroundImage: "url(" + Background1 + ")"}}></div>
              <div className="layer layers__middle" style={{backgroundImage: "url(" + Background2 + ")"}}></div>
              <div className="layer layers__front" style={{backgroundImage: "url(" + Background3 + ")"}}></div>
            </div>
          </header>
          
          <article className="main-article" style={{backgroundImage: "url(" + Dungion + ")"}}>
            <div className="main-article__content">
              <h2 className="main-article__header">To be continued</h2>
              <p className="main-article__paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error provident dignissimos facere. Repellendus tempore autem qui! Quia magnam tempora esse id necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta laboriosam!</p>
            </div>
            <div className="copy">© WebDesign Master</div>
          </article>
        </div>
	    </div>
    
  );
}

export default App;
