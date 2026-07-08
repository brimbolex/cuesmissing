import './App.css'

function App() {
  return (
    <main className="kiosk-dashboard" aria-label="Kiosk dashboard">
      <section className="mirror-panel" aria-label="RESI mirror">
        <iframe
          className="mirror-frame"
          src="https://resi-anwesenheit-app.pages.dev/"
          title="RESI mirror"
        />
      </section>

      <aside
        className="placeholder-panel"
        aria-label="Placeholder panel"
      />
    </main>
  )
}

export default App
