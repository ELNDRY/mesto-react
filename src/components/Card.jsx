import React from 'react'

export const Card = ({ card, onCardClick }) => {

    const handleCardClick = () => onCardClick(card);

    return (
        <li className="element">
            <button className="element__delete" type="button" aria-label="Удалить" />
            <img className="element__image" src={card?.link} alt={`Фотография: ${card?.name}.`} onClick={handleCardClick}/>
            <div className="element__container">
                <h2 className="element__text">{card?.name}</h2>
                <div className="element__wrapper">
                    <button className="element__like" type="button" aria-label="Нравится" />
                    <span className="element__counter">{card?.likes.length}</span>
                </div>
            </div>
        </li>
    )
}