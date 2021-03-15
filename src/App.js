import React, { useState, useRef, useEffect } from 'react'
import { FiSidebar } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import './App.css';

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
            <h3>Michael's Portfolio</h3>
            <div className="drop-down" ref={dropDownNode}>
              <GiHamburgerMenu className="dropbtn" onClick={openDropDown} size='2.5em'>Dropdown</GiHamburgerMenu>
              {dropDown && <div className="dropdown-content"  >
                <a href="#home">Link 1</a>
                <a href="#home">Link 2</a>
                <a href="#home">Link 3</a>
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
          <section className='banner'>banner</section>
          <section className='main-grid'>main grid</section>
          <section className='footer'>footer</section>
        </main>
      </div>
    </div>
  );
}

export default App;
