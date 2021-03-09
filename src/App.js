import './App.css';

function App() {

  const displaySB = () => {
    var sb = document.getElementById("sidebar");
    if (sb.style.display === "none") {
      sb.style.display = "block";
    } else {
      sb.style.display = "none";
    }
  }
  
  return (
    <div className="app">
      <section className='header'>header</section>
      <nav>
        <ul>
          <button onClick={displaySB}>Sidebar btn</button>
          <li className='logo'>logo</li>
          <li className='invs'></li>
          <li>links</li>
          <li>links</li>
          <li>links</li>
          <li>links</li>
        </ul>
      </nav>
      <section className='body'>
        <section id='sidebar' className='sidebar'>
          Sidebar
        </section>
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
