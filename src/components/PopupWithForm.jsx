import React from 'react'

export const PopupWithForms = ({ formName, formTitle, children }) => {
    let className = `popup popup_type_${props.formName}`

    return (
        <div className={className}>
            <div className="popup__container">
                <button className="popup__close-cross" type="button" aria-label="Закрыть"></button>
                <form name={formName} className={`popup__form popup__form_${formName}`} noValidate>
                    <h2 className="popup__title">{formTitle}</h2>
                    {children}
                    <button aria-label="Сохранить" className="popup__submit-button" type="submit">Да</button>
                </form>
            </div>
        </div>
    )
}