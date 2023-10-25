import getRandomFromArr from "../services/getRandomFromArr.js"
import phrases from '../utils/phrases.json'

const ButtonPhrase = ({setPhraseRandom}) => {

    const handleChangePhrase = () =>{
        const quote = getRandomFromArr(phrases)
        setPhraseRandom(quote)
    }

  return (
    <button onClick={handleChangePhrase}>Abrir otra galletica</button>
  )
}

export default ButtonPhrase