import { useCallback, useState } from 'react'
// import { Navbarr } from './assets/components/navbarr'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Header from './components/header';
import Navbar1 from './components/navbarr';
import WhoAreWe from './components/whoarewe';
import WhoWeOffer from './components/service';
import Footer from './components/footer';
import Questions from './components/questions';
import Subscribe from './components/subscribe';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Development from './components/service/development';
import WhyChooseUS from './components/whychooseUs';

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    
    await loadSlim(engine); 
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
 

  return (
    <div className='flex flex-col items-center '>
        
     
        <div className='' style={{ backgroundColor: "blue", height: "100vh", width: "100%" }}>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: true,
          background: {
            image: "linear-gradient(19deg, #141414 0%, #141414 100%)"
          },
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 600
              }
            },
            color: {
              value: "#1effff"
            },
            shape: {
              type: "square",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.25,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 29,
              random: true,
              anim: {
                enable: false,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 300,
              color: "#ffffff",
              opacity: 0,
              width: 0
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "top",
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse"
              },
              onclick: {
                enable: false,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 800,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 790,
                size: 79,
                duration: 2,
                opacity: 0.8,
                speed: 3
              },
              repulse: {
                distance: 400,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
        />
    </div>
      {/* dark theme */}
      
      <div className='absolute top-0 ' >
              <Navbar1/>
              <Header/>
              <div className='flex flex-col items-center'>
                 <WhoAreWe/>
                 <WhoWeOffer/>
                 <WhyChooseUS/>
                 
               </div>
               <Subscribe/>
               <Questions/>
               <Footer/>
              
        </div>
      
        
      
    </div>
  )
}

export default App
