import {useState} from "react"
import getRandomFromArr from "./services/getRandomFromArr.js"
import phrases from "./utils/phrases.json"
import Phrase from "./components/Phrase.jsx"
import ButtonPhrase from "./components/ButtonPhrase.jsx"

function App() {

  let quote = getRandomFromArr(phrases)

  const [phraseRandom, setPhraseRandom] = useState(quote)
  



  return (
    <div>
      <h1>Galleta de la fortuna</h1>
      <Phrase
        phraseRandom = {phraseRandom}
      />
      <ButtonPhrase
        setPhraseRandom = {setPhraseRandom}
      />
    </div>
  )
}

export default App
