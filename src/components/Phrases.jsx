import { memo } from 'react'

const Phrase = ({ phraseRandom }) => {

    return (
        <div className="phrase-container" key={phraseRandom.phrase} aria-live="polite">
            <blockquote className="app__phrase">
                {phraseRandom.phrase}
            </blockquote>
            <cite className="app__author">- {phraseRandom.author}</cite>
        </div>
    )
}

export default memo(Phrase)