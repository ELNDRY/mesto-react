import React, { useState, useEffect, useContext } from 'react'
import { api } from '../utils/api'
import { Card } from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
    const [cards, setCards] = useState([]);
    
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        Promise.all([api.getInitialCards()])
            .then(([initialCards]) => {
                setCards(initialCards);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-overlay" onClick={onEditAvatar}>
                        <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser?.avatar})` }} />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-container">
                            <h1 className="profile__name">{currentUser?.name}</h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}/>
                        </div>
                        <p className="profile__description">{currentUser?.about}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}/>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map(card => <Card key={card._id} card={card} onCardClick={onCardClick} />)}
                </ul>
            </section>
        </main>
    )
}

