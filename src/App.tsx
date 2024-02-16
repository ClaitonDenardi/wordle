import { useState } from 'react'
import { AppContext } from './appContext'
import Menu from './components/menu';
import Game from './components/game';
import Footer from './components/footer';

function App() {
  const [timing, setTiming] = useState(45);
  const [ingame, setIngame] = useState(false);
  const [offline, setOffline] = useState(false);

  return (
    <AppContext.Provider value={{ timing, setTiming, ingame, setIngame, offline, setOffline }}>
      <main>
        <div>
          <header><h1>Wordle</h1></header>
          {!ingame && <Menu />}
          {ingame && <Game />}
        </div>
        <Footer />
      </main>
    </AppContext.Provider>
  )
}

export default App
