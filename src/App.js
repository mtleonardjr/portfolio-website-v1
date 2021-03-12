import React, { useState, useRef } from 'react'
import './App.css';

function App() {

  const node = useRef();

  const [sideBar, setSideBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  //Solutions using hooks
  const openSideBar = () => {
    setSideBar(!sideBar);
  }

  const openDropDown = () => {
    setDropDown(!dropDown);
  }
  
  return (
    <div className="app">
      <section className='header'>header</section>
      <nav>
        <ul className='mobile-header'>
          <button onClick={openSideBar}>Sidebar btn</button>
          <h3>Michael's Portfolio</h3>
          <div className="dropdown">
            <button className="dropbtn" onClick={openDropDown}>Dropdown</button>
            {dropDown && <div className="dropdown-content" id="dropdown-content" ref={node}>
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
      <section className='body'>
        {sideBar && <section id='sidebar' className='sidebar'>Sidebar</section>}
        <main>
          <section className='banner'>banner</section>
          <section className='main-grid'>main grid</section>
          <section className='footer'>footer</section>
        </main>
      </section>
    </div>
  );
}

export default App;
