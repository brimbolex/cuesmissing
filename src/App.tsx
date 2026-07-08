import './App.css'
import { presenceLocations } from './config/presence'

const visibleLocations = presenceLocations.slice(0, 6)

function App() {
  return (
    <main className="kiosk-dashboard" aria-label="Kiosk dashboard">
      <section className="presence-panel" aria-label="RESI Status">
        <div className="presence-grid">
          {visibleLocations.map((location) => (
            <article
              key={location.id}
              className={`presence-tile presence-tile--${location.status}`}
              aria-label={`${location.name}, ${location.statusLabel}`}
            >
              <div className="presence-tile__top">
                <h2 className="presence-location">{location.name}</h2>
                <span
                  className="presence-status"
                  aria-label={`Status: ${location.statusLabel}`}
                >
                  <span className="presence-status__dot" aria-hidden="true" />
                  {location.statusLabel}
                </span>
              </div>

              <div className="presence-tile__body">
                {location.detail ? (
                  <p className="presence-detail">{location.detail}</p>
                ) : (
                  <span aria-hidden="true" />
                )}
              </div>

              <p className="presence-updated">{location.updatedAt}</p>
            </article>
          ))}
        </div>
      </section>

      <aside
        className="placeholder-panel"
        aria-label="Placeholder panel"
      />
    </main>
  )
}

export default App
