import React from 'react'

export const PopupImage = () => {
    return (
        <div className="popup popup_type_image">
            <div className="popup__container">
                <button className="popup__close-cross" type="button" aria-label="Закрыть"></button>
                <figure className="img-figure">
                    <img className="img-figure__image" />
                    <figcaption className="img-figure__caption">
                        <h2 className="img-figure__description"></h2>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}