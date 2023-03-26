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
    minlength="2"
    maxlength="40"
/>
<span className="popup__input-error" id="name-input-error"
    >Вы пропустили это поле</span>
<input
    id="decription-input"
    className="popup__input popup__input_description"
    name="description"
    type="text"
    required
    minlength="2"
    maxlength="200"
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
onClose={closeAllPopups}>
<fieldset className="popup__fieldset">
<input
    id="place-input"
    className="popup__input popup__input_place"
    name="name"
    type="text"
    placeholder="Название"
    required
    minlength="2"
    maxlength="30"
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


        <section className="popup popup_profile_submit">
            <div className="popup__edit-form popup__content">
                <button
    
    className="popup__close"
                    type="button"
                    title="close"
                ></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" name="profile_form" novalidate>
                    <fieldset className="popup__fieldset">
                        <input
                            id="name-input"
                            className="popup__input popup__input_name"
                            name="name"
                            type="text"
                            required
                            minlength="2"
                            maxlength="40"
                        />
                        <span className="popup__input-error" id="name-input-error"
                            >Вы пропустили это поле</span>
                        <input
                            id="decription-input"
                            className="popup__input popup__input_description"
                            name="description"
                            type="text"
                            required
                            minlength="2"
                            maxlength="200"
                        />
                        <span
                            className="popup__input-error"
                            id="decription-input-error"
                            >Вы пропустили это поле</span>
                    </fieldset>
                    <button className="popup__submit" type="submit" title="submit">
                        Создать
                    </button>
                </form>
            </div>
        </section>

        <section className="popup popup_avatar_edit">
            <div className="popup__edit-avatar popup__content">
                <button className="popup__close" type="button" title="close"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="popup__form" name="avatar_form" novalidate>
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
               <button className="popup__submit" type="submit" title="submit">
                        Сохранить
                    </button>
                </form>
            </div>
        </section>

        {/* <section className="popup popup_agree-delete">
            <div className="popup__delete-confirm popup__content">
                <button className="popup__close" type="button"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <form className="popup__form" name="card_delete" novalidate>
                    <button className="popup__submit" type="submit">Да</button>
                </form>
            </div>
        </section>  */}

        <section className="popup popup_card_submit">
            <div className="popup__add-card popup__content">
                <button
                    className="popup__close popup__close-card"
                    type="button"
                    title="close"
                ></button>
                <h2 className="popup__title">Новое место</h2>
                <form
                    className="popup__form popup__form_card"
                    name="card_form"
                    novalidate
                >
                    <fieldset className="popup__fieldset">
                        <input
                            id="place-input"
                            className="popup__input popup__input_place"
                            name="name"
                            type="text"
                            placeholder="Название"
                            required
                            minlength="2"
                            maxlength="30"
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
                    <button
                        className="popup__submit popup__submit_inactive"
                        type="submit"
                        title="submit"
                        disabled
                    >
                        Сохранить
                    </button>
                </form>
            </div>
        </section>

        <section className="popup popup_photo_open">
            <figure className="popup__open-photo popup__content">
                <button
                    className="popup__close popup__close-photo"
                    type="button"
                    title="close"
                ></button>
                <img className="popup__photo" src="#" alt="image" />
                <figcaption className="popup__caption"></figcaption>
            </figure>
        </section>

        <template id="element__card">
            {/* <li className="element__card">
                <button
                    className="element__delete"
                    type="button"
                    title="delete"
                ></button>
                <img className="element__image" src="#" alt="image" />
                <div className="element__title">
                    <h2 className="element__text"></h2>
                    <div className="element__like-section">
                        <button
                            className="element__button"
                            type="button"
                            title="like"
                        ></button>
                        <span className="element__like-counter">0</span>
                    </div>
                </div>
            </li> */}
        </template>

    </div>
  );
}

export default App