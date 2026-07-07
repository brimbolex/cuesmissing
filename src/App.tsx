import './App.css'
import { presencePeople } from './config/presence'

const visiblePeople = presencePeople.slice(0, 6)

function App() {
  return (
    <main className="kiosk-dashboard" aria-label="Kiosk dashboard">
      <section className="presence-panel" aria-labelledby="presence-title">
        <div className="presence-header">
          <p className="presence-label">Presence</p>
          <h1 id="presence-title">Team Availability</h1>
        </div>

        <div className="presence-grid">
          {visiblePeople.map((person) => (
            <article
              key={person.id}
              className={`presence-tile presence-tile--${person.status}`}
              aria-label={`${person.name}, ${person.status}`}
            >
              <div className="presence-tile__top">
                <div className="presence-avatar" aria-hidden="true">
                  {person.initials}
                </div>
                <span className="presence-status">
                  <span className="presence-status__dot" aria-hidden="true" />
                  {person.statusLabel}
                </span>
              </div>

              <div className="presence-tile__body">
                <h2>{person.name}</h2>
                <p className="presence-role">{person.role}</p>
                <p className="presence-detail">{person.detail}</p>
              </div>

              <p className="presence-updated">{person.updatedAt}</p>
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
