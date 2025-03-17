import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const ButtonPhrase = ({ setPhraseRandom, setBgApp }) => {

    const handleChangePhrase = ({}) => {
        const quote = getRandomFromArr(phrases)
        setPhraseRandom(quote)
        setBgApp(getRandomFromArr([1, 2, 3, 4, 5, 6, 7, 8]))

    }

    return (

    
    <button className="app__btn" onClick = {handleChangePhrase} >Other</button>
    )
}

export default ButtonPhrase