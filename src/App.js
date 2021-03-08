import './App.css';

function App() {
  return (
    <div className="app">
      <section className='header'>header</section>
      <nav>
        <ul>
          <li className='logo'>logo</li>
          <li className='invs'></li>
          <li>1</li>
          <li>1</li>
        </ul>
      </nav>
      <main>
        <section className='side-bar'>
          Sidebar
        </section>
        <body>
          <section className='banner'>banner</section>
          <section className='body-grid'>body grid</section>
          <section className='footer'>footer</section>
        </body>
      </main>
    </div>
  );
}

export default App;
