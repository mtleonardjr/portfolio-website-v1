import React, { useState, useRef } from 'react'
import './App.css';

function App() {

  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  //Solution using hooks
  const openSideBar = () => {
    setOpen(!open);
  }

  const openDropDown = () => {
    setDropDown(!dropDown);
  }


  // //Trad. JS and CSS solution
  // const displaySB = () => {
  //   var sb = document.getElementById("sidebar");
  //   if (window.getComputedStyle(sb, null).getPropertyValue("display")=== "none") {
  //     sb.style.display = "block";
  //   } else {
  //     sb.style.display = "none";
  //   }
  // }

  // const displayDD = () => {
  //   var dd = document.getElementById("dropdown-content");
  //   if (window.getComputedStyle(dd, null).getPropertyValue("display")=== "none") {
  //     dd.style.display = "flex";
  //   } else {
  //     dd.style.display = "none";
  //   }
  // }
  
  return (
    <div className="app">
      <section className='header'>header</section>
      <nav>
        <ul className='mobile-header'>
          <button onClick={openSideBar}>Sidebar btn</button>
          <h3>Michael's Portfolio</h3>
          <div className="dropdown">
            <button className="dropbtn" onClick={openDropDown}>Dropdown</button>
            <div className="dropdown-content" id="dropdown-content">
              <a href="#home">Link 1</a>
              <a href="#home">Link 2</a>
              <a href="#home">Link 3</a>
            </div>
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
        {open && <section id='sidebar' className='sidebar'>Sidebar</section>}
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
