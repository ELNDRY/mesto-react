import React from 'react'

export const PopupWithForms = ({ formName, formTitle, isOpen, buttonText, children }) => {
    let className = `popup popup_type_${formName}`

    if (isOpen) {
        className += ' popup_active';
    }

    return (
        <div className={className}>
            <div className="popup__container">
                <button className="popup__close-cross" type="button" aria-label="Закрыть"></button>
                <form name={formName} className={`popup__form popup__form_${formName}`} noValidate>
                    <h2 className="popup__title">{formTitle}</h2>
                    {children}
                    <button aria-label={buttonText} className="popup__submit-button" type="submit">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}