

const Phrase = ({ phraseRandom }) => {

    return (
        <div>
            <p className="app__phrase">{phraseRandom.phrase}</p>
            <p className="app__author">- {phraseRandom.author}</p>
        </div>
    )
}

export default Phrase