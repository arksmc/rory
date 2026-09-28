import './Home.css'

function Home() {
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

      <section className="section" id="latest-date">
        <h2 id="date-title">our latest date</h2>

        <div className="date-content">
          <img
            src="https://placehold.co/300x200"
            id="latest-date-img"
            alt="Our latest date"
          />

          <div className="date-details">
            <h3>where we went:</h3>
            <h3>mark's rating:</h3>
            <h3>lori's rating:</h3>
          </div>
        </div>

        <div className="date-description">
          <p>memorable things:</p>
        </div>

        <div className="date-photos">
          <p>photos from our date:</p>
        </div>
      </section>
      <section className="section" id="song-recommendations">
        <h2 id="song-recommendations-title">song recommendations</h2>

        <div id="recommendation-columns">
          <div className="recommendation" id="lori-recommendation">
            <h3>lori's recommendation</h3>

          <img
            src="https://placehold.co/250x250"
            className="song-cover"
            alt="Lori's recommended song"
          />

        <div className="song-info">
          <h4 className="song-title">song title</h4>
          <p className="song-artist">artist name</p>
          <p className="song-date">recommended: september 28, 2026</p>
        </div>

          <button className="song-edit-button">+</button>
        </div>

        <div className="recommendation" id="mark-recommendation">
        <h3>mark's recommendation</h3>

        <img
          src="https://placehold.co/250x250"
          className="song-cover"
          alt="Mark's recommended song"
        />

          <div className="song-info">
            <h4 className="song-title">song title</h4>
            <p className="song-artist">artist name</p>
            <p className="song-date">recommended: september 28, 2026</p>
            </div>

            <button className="song-edit-button">+</button>
          </div>
        </div>
      </section>

      <section className="section" id="timeline">
  <h2 id="timeline-title">our timeline</h2>

  <div className="timeline-wrapper">
    <button className="timeline-arrow left">←</button>

    <div id="timeline-container">
      <div className="timeline-event">
        <div className="timeline-content top">
          <h3>first message</h3>
          <p>june 2026</p>
        </div>

        <div className="timeline-dot"></div>

        <div className="timeline-content bottom">
          <p>the beginning of everything</p>
        </div>
      </div>

      <div className="timeline-event">
        <div className="timeline-content top">
          <p>our first game together</p>
        </div>

        <div className="timeline-dot"></div>

        <div className="timeline-content bottom">
          <h3>first game</h3>
          <p>june 2026</p>
        </div>
      </div>

      <div className="timeline-event">
        <div className="timeline-content top">
          <h3>cat café</h3>
          <p>july 2026</p>
        </div>

        <div className="timeline-dot"></div>

        <div className="timeline-content bottom">
          <p>we really like cats apparently</p>
        </div>
      </div>

      <div className="timeline-event">
        <div className="timeline-content top">
          <p>something special happened</p>
        </div>

        <div className="timeline-dot"></div>

        <div className="timeline-content bottom">
          <h3>another memory</h3>
          <p>july 2026</p>
        </div>
      </div>

      <div className="timeline-event">
        <div className="timeline-content top">
          <h3>makiling</h3>
          <p>august 2026</p>
        </div>

        <div className="timeline-dot"></div>

        <div className="timeline-content bottom">
          <p>our little adventure</p>
        </div>
      </div>

      <div className="timeline-event">
        <div className="timeline-content top">
          <p>another day together</p>
        </div>

        <div className="timeline-dot"></div>

        <div className="timeline-content bottom">
          <h3>another memory</h3>
          <p>september 2026</p>
        </div>
      </div>
    </div>

    <button className="timeline-arrow right">→</button>
  </div>
</section>
        </main>
    )
}

export default Home