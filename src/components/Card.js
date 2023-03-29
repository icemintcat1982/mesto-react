function Card({card, onCardClick}) {

    function handleCardClick() {
        onCardClick(card)
    }
    return(
        <li className="element__card">
        <button
            className="element__delete"
            type="button"
            title="delete"
        ></button>
        <img className="element__image" src={card.link} alt={card.name} onClick={handleCardClick} />
        <div className="element__title">
            <h2 className="element__text">{card.name}</h2>
            <div className="element__like-section">
                <button
                    className="element__button"
                    type="button"
                    title="like"
                ></button>
                <span className="element__like-counter">{card.likes.length}</span>
            </div>
        </div>
    </li>
    )
}

export default Card