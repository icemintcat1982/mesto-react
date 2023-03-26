function Card({card, onCardClick}) {

    function handleCardClick() {
        onCardClick(card)
    }
    return(
        <li class="element__card">
        <button
            class="element__delete"
            type="button"
            title="delete"
        ></button>
        <img class="element__image" src={card.link} alt={card.name} onClick={handleCardClick} />
        <div class="element__title">
            <h2 class="element__text">{card.name}</h2>
            <div class="element__like-section">
                <button
                    class="element__button"
                    type="button"
                    title="like"
                ></button>
                <span class="element__like-counter">{card.likes.length}</span>
            </div>
        </div>
    </li>
    )
}

export default Card