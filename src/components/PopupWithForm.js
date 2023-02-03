function PopupWithForm({name, title, isOpen, onClose, children}) {

    return (
        <div className={`popup ${name}-popup ${isOpen}`}>
            <div className="popup__container">
                <button className="popup__cross popup__close" type="button" onClick={onClose} ></button>
                <h3 className="popup__title">{title}</h3>
                <form className="popup__form" name={name} noValidate>
                    {children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;