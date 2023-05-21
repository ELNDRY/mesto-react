import React from 'react'

export const Main = ({onEditProfile, onAddPlace, onEditAvatar}) => {

    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-overlay" onClick={onEditAvatar}>
                        <img className="profile__avatar" src="#" alt="#" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-container">
                            <h1 className="profile__name"></h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__description"></p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>
        </main>
    )
}

