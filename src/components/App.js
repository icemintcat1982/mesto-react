import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
    };
    
    const handleEditProfileClick = () => {
       setIsEditProfilePopupOpen(true)
    };
    
    const handleAddPlaceClick = () => {
       setIsAddPlacePopupOpen(true)
    };

    const handleCardClick = (card) => {
        setSelectedCard(card)
    };

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    };


    
  return (
    <div className="page">
<Header/>
<Main 
onEditAvatar={handleEditAvatarClick}
onEditProfile={handleEditProfileClick}
onAddPlace={handleAddPlaceClick}
onCardClick={handleCardClick}

/>
<Footer/>
<PopupWithForm
name='profile_submit'
title='Редактировать профиль'
isOpen={isEditProfilePopupOpen}
onClose={closeAllPopups}
><fieldset className="popup__fieldset">
<input
    id="name-input"
    className="popup__input popup__input_name"
    name="name"
    type="text"
    required
    minLength="2"
    maxLength="40"
/>
<span className="popup__input-error" id="name-input-error"
    >Вы пропустили это поле</span>
<input
    id="decription-input"
    className="popup__input popup__input_description"
    name="description"
    type="text"
    required
    minLength="2"
    maxLength="200"
/>
<span
    className="popup__input-error"
    id="decription-input-error"
    >Вы пропустили это поле</span>
</fieldset>
</PopupWithForm>

<PopupWithForm
name='avatar_edit'
title='Обновить аватар'
isOpen={isEditAvatarPopupOpen}
onClose={closeAllPopups}>
<fieldset className="popup__fieldset">
<input
    id="avatar-input"
    className="popup__input popup__input_avatar"
    name="avatar"
    type="url"
    placeholder="Ссылка на картинку"
    required
/>
<span className="popup__input-error" id="avatar-input-error">Введите ссылку на картинку
</span>
</fieldset>
</PopupWithForm>

<PopupWithForm
name='card_submit'
title='Новое место'
isOpen={isAddPlacePopupOpen}
onClose={closeAllPopups}
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
/>
<span className="popup__input-error" id="link-input-error"
    >Введите адрес сайта</span>
</fieldset>
</PopupWithForm>
<ImagePopup
card={selectedCard}
onClose={closeAllPopups}/>

       <template id="element__card">
        </template>

    </div>
  );
}

export default App