import React, { useState, useRef, useEffect } from 'react'
import { FiSidebar } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import './App.css';
import cycle from './images/cycle.PNG'
import wikipedia from './images/wikipedia.PNG'
import snake from './images/snake.PNG'

function App() {

  const dropDownNode = useRef();
  const sideBarNode = useRef();

  const [sideBar, setSideBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  //Solutions using hooks
  const openSideBar = () => {
    setSideBar(!sideBar);
  }
  const openDropDown = () => {
    setDropDown(!dropDown);
  }

  //Handling Mouse Clicks
  const handleDropDownClick = (e) => {
    if (dropDownNode.current.contains(e.target)) {
      return;
    } else {
      setDropDown(false);
    }
  }
  const handleSideBarClick = (e) => {
    if (sideBarNode.current.contains(e.target)) {
      return;
    } else {
      setSideBar(false);
    }
  }

  //Hook to add/remove listeners
  useEffect(()=>{
    if(dropDown) {
      document.addEventListener("mousedown", handleDropDownClick);
    } else {
      document.removeEventListener("mousedown", handleDropDownClick);
    }
    if(sideBar) {
      document.addEventListener("mousedown", handleSideBarClick);
    } else {
      document.removeEventListener("mousedown", handleSideBarClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleDropDownClick);
      document.removeEventListener("mousedown", handleSideBarClick);
    } 
  }, [dropDown, sideBar])
  
  return (
    <div className='app-container'>
      {sideBar && <section id='sidebar' className='sidebar' ref={sideBarNode} >Sidebar</section>}
      <div className="app">
        <section className='header'>header</section>
        <nav>
          <ul className='mobile-header'>
            <FiSidebar onClick={openSideBar} className='side-bar-btn' size='2.5em'>Sidebar btn</FiSidebar>
            <h3>Portfolio</h3>
            <div className="drop-down" ref={dropDownNode}>
              <GiHamburgerMenu className="dropbtn" onClick={openDropDown} size='2.5em'>Dropdown</GiHamburgerMenu>
              {dropDown && <div className="dropdown-content"  >
                <a href="#home">Home</a>
                <a href="#home">Categories</a>
                <a href="#home">About</a>
              </div>}
            </div>
            
          </ul>
          <ul className='link-bar'>
            <li className='logo'>logo</li>
            <li className='invs'></li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
          </ul>
        </nav>
        <main>
          <section className='banner'>
            <div className='banner-head'>
              <h4>Welcome to Portfolio</h4>
              <p>The React built web app that helps you display your projects</p>
              <p>Currently displaying 2 of Michael's projects</p>
            </div>
            <div className='banner-links'>
              <h5>Jump to a project:</h5>
              <ul>
                <a href="#home" className='banner-link'>Project 1</a>
                <a href="#home" className='banner-link'>Project 2</a>
                <a href="#home" className='banner-link'>Project 3</a>
                <a href="#home" className='banner-link'>Project 4</a>
              </ul>
            </div>
          </section>
          <section className='main-grid'>
            <div className='project'>
              <h2>Cycle</h2>
              <div className='project-body'>
                <div className='project-body-image-container'><img src={cycle} alt="portfolio thumbnail" className='project-body-image' /></div>
                <div className='project-body-text'>et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut</div>
              </div>
              <div className='project-links'>
                <h5>Key Technologies:</h5>
                <ul>
                  <li className='banner-link'>React</li>
                  <li className='banner-link'>JavaScript</li>
                  <li className='banner-link'>HTML</li>
                  <li className='banner-link'>CSS</li>
                </ul>
                <h5>Links:</h5>
                <ul>
                  <a href="#home" className='banner-link'>Github</a>
                  <a href="#home" className='banner-link'>demo site</a>
                </ul>
              </div>
            </div>
            <div className='project'>
              <h2>Wikipedia Clone</h2>
              <div className='project-body'>
                <div className='project-body-image-container'><img src={wikipedia} alt="portfolio thumbnail" className='project-body-image' /></div>
                <div className='project-body-text'>et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut</div>
              </div>
              <div className='project-links'>
              <h5>Links:</h5>
              <ul>
                <a href="#home" className='banner-link'>Github</a>
                <a href="#home" className='banner-link'>demo site</a>
              </ul>
            </div>
            </div>
            <div className='project'>
              <h2>Snake Game</h2>
              <div className='project-body'>
                <div className='project-body-image-container'><img src={snake} alt="portfolio thumbnail" className='project-body-image' /></div>
                <div className='project-body-text'>et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut</div>
              </div>
              <div className='project-links'>
              <h5>Links:</h5>
              <ul>
                <a href="#home" className='banner-link'>Github</a>
                <a href="#home" className='banner-link'>demo site</a>
              </ul>
            </div>
            </div>
          </section>
          <section className='footer'>footer</section>
        </main>
      </div>
    </div>
  );
}

export default App;
