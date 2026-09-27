import './App.css'

function App() {
  return (
    <main className="site">
      <nav className="navbar">
        <h2 id="title">lori and mark's homepage</h2>
        <p id="welcome">welcome to our little corner of the internet</p>

        <div className="nav-links">
          <a href="#">home</a>
          <a href="#">memories</a>
          <a href="#">letters</a>
          <a href="#">acads</a>
          <a href="#">about</a>
        </div>
      </nav>

      <section className="latest-date">
        <h2 id="date-title">our latest date</h2>

        <div className="date-content">
          <img src="https://placehold.co/300x200" id="latest-date-img"alt="Our latest date" />
          <div className="date-details">
            <h3>where we went: </h3>
            <h3>mark's rating: </h3>
            <h3>lori's rating: </h3>
          </div>
        </div>
        <div className="date-description">
          <p>memorable things:</p>
        </div>
        <div className="date-photos">
          <p>photos from our date:</p>
          {/* Add photo gallery here */}
        </div>
      </section>
    </main>
  )
}

export default App
