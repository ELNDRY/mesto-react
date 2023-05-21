import React, { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'
import { PopupWithForms } from './PopupWithForm'

export const App = () => {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);

    const handleEditAvatarClick = () => setisEditAvatarPopupOpen(true);
    const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
    const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setisEditAvatarPopupOpen(false);
    }

    return (
        <div className="page">
            <div className="content">
                <Header />
                <Main onEditProfile={handleEditProfileClick}
                    onEditAvatar={handleEditAvatarClick}
                    onAddPlace={handleAddPlaceClick}
                />
                <Footer />
                <PopupWithForms
                    formName={'confirm'}
                    formTitle={'Вы уверены?'}
                    onClose={closeAllPopups}
                    buttonText={'Да'}
                >
                </PopupWithForms>
                <PopupWithForms
                    formName={'profile'}
                    formTitle={'Редактировать профиль'}
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    buttonText={'Сохранить'}
                >
                    <input id="name" name="name" className="popup__input popup__input_type_name" placeholder="Ваше имя" required
                        minLength="2" maxLength="40" />
                    <span className="popup__input-error name-error"></span>
                    <input id="about" name="about" className="popup__input popup__input_type_description" placeholder="О себе" required
                        minLength="2" maxLength="200" />
                    <span className="popup__input-error about-error"></span>
                </PopupWithForms>
                <PopupWithForms
                    formName={'avatar'}
                    formTitle={'Обновить аватар'}
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    buttonText={'Сохранить'}
                >
                    <input id="avatar" type="url" name="avatar" className="popup__input popup__input_type_avatar-link"
                        placeholder="Ссылка на картинку" required />
                    <span className="popup__input-error avatar-error"></span>
                </PopupWithForms>
                <PopupWithForms
                    formName={'add-card'}
                    formTitle={'Новое место'}
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    buttonText={'Создать'}
                >
                    <input id="card-name" name="name" className="popup__input popup__input_type_card-name" placeholder="Название"
                        required minLength="2" maxLength="30" />
                    <span className="popup__input-error card-name-error"></span>
                    <input id="card-link" type="url" name="link" className="popup__input popup__input_type_card-link"
                        placeholder="Ссылка на картинку" required />
                    <span className="popup__input-error card-link-error"></span>
                </PopupWithForms>
            </div>
            <template id="element-template">
                <li className="element">
                    <button className="element__delete" type="button" aria-label="Удалить"></button>
                    <img className="element__image" />
                    <div className="element__container">
                        <h2 className="element__text"></h2>
                        <div className="element__wrapper">
                            <button className="element__like" type="button" aria-label="Нравится"></button>
                            <span className="element__counter"></span>
                        </div>
                    </div>
                </li>
            </template>
        </div>
    )
}