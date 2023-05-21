import React, { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'

export const App = () => {

    function handleEditAvatarClick() {
        const popupAvatar = document.querySelector('.popup_type_avatar');

        popupAvatar.classList.add('popup_active');
    }
    function handleEditProfileClick() {
        const popupEdit = document.querySelector('.popup_type_profile');

        popupEdit.classList.add('popup_active');
    }
    function handleAddPlaceClick() {
        const popupAdd = document.querySelector('.popup_type_add-card');

        popupAdd.classList.add('popup_active');
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
                <div className="popup popup_type_confirm">
                    <div className="popup__container">
                        <button className="popup__close-cross" type="button" aria-label="Закрыть"></button>
                        <form name="confirm" className="popup__form popup__form_confirm" noValidate>
                            <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
                            <button aria-label="Сохранить" className="popup__submit-button" type="submit">Да</button>
                        </form>
                    </div>
                </div>
                <div className="popup popup_type_profile">
                    <div className="popup__container">
                        <button className="popup__close-cross" type="button" aria-label="Закрыть"></button>
                        <form name="edit-profile" className="popup__form popup__form_profile" noValidate>
                            <h2 className="popup__title">Редактировать профиль</h2>
                            <input id="name" name="name" className="popup__input popup__input_type_name" placeholder="Ваше имя" required
                                minLength="2" maxLength="40" />
                            <span className="popup__input-error name-error"></span>
                            <input id="about" name="about" className="popup__input popup__input_type_description" placeholder="О себе" required
                                minLength="2" maxLength="200" />
                            <span className="popup__input-error about-error"></span>
                            <button aria-label="Сохранить" className="popup__submit-button" type="submit" disabled>Сохранить</button>
                        </form>
                    </div>
                </div>
                <div className="popup popup_type_avatar">
                    <div className="popup__container">
                        <button className="popup__close-cross" type="button" aria-label="Закрыть"></button>
                        <form name="edit-avatar" className="popup__form popup__form_avatar" noValidate>
                            <h2 className="popup__title">Обновить аватар</h2>
                            <input id="avatar" type="url" name="avatar" className="popup__input popup__input_type_avatar-link"
                                placeholder="Ссылка на картинку" required />
                            <span className="popup__input-error avatar-error"></span>
                            <button aria-label="Сохранить" className="popup__submit-button" type="submit" disabled>Сохранить</button>
                        </form>
                    </div>
                </div>
                <div className="popup popup_type_add-card">
                    <div className="popup__container">
                        <button aria-label="close" className="popup__close-cross" type="button"></button>
                        <form name="add-card" className="popup__form popup__form_add-card" noValidate>
                            <h2 className="popup__title">Новое место</h2>
                            <input id="card-name" name="name" className="popup__input popup__input_type_card-name" placeholder="Название"
                                required minLength="2" maxLength="30" />
                            <span class="popup__input-error card-name-error"></span>
                            <input id="card-link" type="url" name="link" className="popup__input popup__input_type_card-link"
                                placeholder="Ссылка на картинку" required />
                            <span className="popup__input-error card-link-error"></span>
                            <button aria-label="Создать" className="popup__submit-button" type="submit" disabled>Создать</button>
                        </form>
                    </div>
                </div>
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