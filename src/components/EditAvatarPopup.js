import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, openUpdateAvatar}) {

const avatarRef = React.useRef('');

const handleSubmit = (evt) => {
    evt.preventDefault(evt)
    openUpdateAvatar({
        avatar: avatarRef.current.value 
    })
    avatarRef.current.value = ''
}
    
return(
    <PopupWithForm
name='avatar_edit'
title='Обновить аватар'
isOpen={isOpen}
onClose={onClose}
onSubmit={handleSubmit}>
<fieldset className="popup__fieldset">
<input
    id="avatar-input"
    className="popup__input popup__input_avatar"
    name="avatar"
    type="url"
    placeholder="Ссылка на картинку"
    required
    ref={avatarRef}
/>
<span className="popup__input-error" id="avatar-input-error">Введите ссылку на картинку
</span>
</fieldset>
</PopupWithForm>
)
}

export default EditAvatarPopup