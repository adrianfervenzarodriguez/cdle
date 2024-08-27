import Board from "./components/Board"

import words from './data/words.json'

function App() {
    const {key, description} = words[Math.floor(Math.random() * words.length)]
    const word = key
    
    return (
      <>
        <header className="flex flex-row h-20 bg-slate-400 justify-start items-center p-4">
            <span className="text-2xl font-semibold">Codle</span>
        </header>

        <main className="flex flex-col bg-slate-300 h-screen items-center"> 
            <Board word={word} description={description}/>
        </main>
      </>
    )
  }
  
  export default App
  