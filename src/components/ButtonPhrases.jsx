import { memo, useCallback } from 'react'
import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const ButtonPhrase = ({ setPhraseRandom, setBgApp }) => {

    const handleChangePhrase = useCallback(() => {
        const quote = getRandomFromArr(phrases)
        setPhraseRandom(quote)
        setBgApp(getRandomFromArr(bgArr))
    }, [setPhraseRandom, setBgApp])

    return (
    <button
        className="app__btn"
        onClick={handleChangePhrase}
        aria-label="Get new fortune cookie message"
        type="button"
    >
        Get New Fortune
    </button>
    )
}

export default memo(ButtonPhrase)