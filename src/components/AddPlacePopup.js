import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
const [place, setPlace] = React.useState('');
const [link, setLink] = React.useState('');

const handlePlaceChange = (evt) => {
    setPlace(evt.target.value)
}

const handleLinkChange = (evt) => {
    setLink(evt.target.value)
}

const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace({
        place: place,
        link: link,
    })

}

    return (
        <PopupWithForm
name='card_submit'
title='Новое место'
isOpen={isOpen}
onClose={onClose}
onSubmit={handleSubmit}
buttonText='Да'>
<fieldset className="popup__fieldset">
<input
    id="place-input"
    className="popup__input popup__input_place"
    name="name"
    type="text"
    placeholder="Название"
    required
    minLength="2"
    maxLength="30"
    onChange={handlePlaceChange}
/>
<span className="popup__input-error" id="place-input-error"
    >Вы пропустили это поле</span>
<input
    id="link-input"
    className="popup__input popup__input_link"
    name="link"
    type="url"
    placeholder="Ссылка на картинку"
    required
    onChange={handleLinkChange}
/>
<span className="popup__input-error" id="link-input-error"
    >Введите адрес сайта</span>
</fieldset>
</PopupWithForm>
    )
}

export default AddPlacePopup
