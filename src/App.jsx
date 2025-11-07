import './App.css'
import phrases from './utils/phrases.json'
import bgArr from './utils/bgArr.json'
import { useState } from 'react'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrases'
import ButtonPhrase from './components/ButtonPhrases'




function App() {

  const quote = getRandomFromArr(phrases)

  const [phraseRandom, setPhraseRandom] = useState(quote)
  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr))

  const objStyle = {
    backgroundImage: `url('../fondo${bgApp}.jpg')`
    
  }
  
  
  
  return (
    <main style={objStyle} className='app' role="main">
      <h1 className='app__tittle'>Fortune Cookie</h1>
      <article className='app__card' role="article" aria-label="Fortune cookie message">
      <Phrase
      phraseRandom = {phraseRandom}
      />
      < ButtonPhrase
      setPhraseRandom = {setPhraseRandom}
      setBgApp = {setBgApp}
      />
      </article>
    </main>


  )
}

export default App
