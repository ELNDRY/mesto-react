import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'
import { PopupWithForm } from './PopupWithForm'
import { ImagePopup } from './ImagePopup'
import { api } from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { EditProfilePopup } from './EditProfilePopup'
import { EditAvatarPopup } from './EditAvatarPopup'

export const App = () => {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);


    const handleEditAvatarClick = () => setisEditAvatarPopupOpen(true);
    const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
    const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
    const handleCardClick = (card) => setSelectedCard(card);
    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
            });
    }
    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
            .then(() => {
                const updateCards = cards.filter((c) => card._id !== c._id);
                setCards(updateCards);
            })
    }

    const [currentUser, setCurrentUser] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userInfo, initialCards]) => {
                setCurrentUser(userInfo);
                setCards(initialCards);
            })
            .catch((err) => {
                console.error(`Ошибка: ${err}`);
            })
    })

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setisEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    const handleUpdateUser = (user) => {
        api.editUserInfo(user)
            .then((userInfo) => {
                setCurrentUser(userInfo);
                setIsEditProfilePopupOpen(false);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const handleUpdateAvatar = (avatar) => {
        api.editUserAvatar(avatar)
            .then((newAvatar) => {
                setCurrentUser(newAvatar);
                setisEditAvatarPopupOpen(false);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <div className="page">
            <div className="content">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header />
                    <Main cards={cards}
                        onEditProfile={handleEditProfileClick}
                        onEditAvatar={handleEditAvatarClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                    <Footer />
                    <PopupWithForm
                        formName={'confirm'}
                        formTitle={'Вы уверены?'}
                        onClose={closeAllPopups}
                        buttonText={'Да'}
                    >
                    </PopupWithForm>
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
                    <PopupWithForm
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
                    </PopupWithForm>
                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                </CurrentUserContext.Provider>
            </div>
        </div>
    )
}