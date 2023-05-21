import React, { useState, useEffect } from 'react'
import { api } from '../utils/Api'
import { Card } from './Card';

export const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
    const [userName, setuserName] = useState(null);
    const [userDescription, setuserDescription] = useState(null);
    const [userAvatar, setuserAvatar] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([info, initialCards]) => {
                setuserName(info.name);
                setuserDescription(info.about);
                setuserAvatar(info.avatar)
                setCards(initialCards);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-overlay" onClick={onEditAvatar}>
                        <img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-container">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map(card => <Card key={card._id} card={card} onCardClick={onCardClick} />)}
                </ul>
            </section>
        </main>
    )
}

