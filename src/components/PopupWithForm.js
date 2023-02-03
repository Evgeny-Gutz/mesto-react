import { Children } from "react";

function PopupWithForm(props) {

    function createMarkupProfile() {
        return (
            <>
                <label className="popup__field">
                    <input id="name-input" className="popup__input popup__input_type_name" type="text" name="name" minLength="2" maxLength="40" required />
                    <span className="name-input-error popup__input-error"></span>
                </label>
                <label className="popup__field">
                    <input id="profession-input" className="popup__input popup__input_type_job" type="text" name="profession" minLength="2" maxLength="200" required />
                    <span className="profession-input-error popup__input-error"></span>
                </label>
                <input className="popup__submit" type="submit" name="submit" value="Сохранить"></input>
            </>
        );
    }

    function createMarkupCard() {
        return (
            <>
                <label className="popup__field">
                    <input id="title-input" className="popup__input popup__input_type_title" type="text" name="title" placeholder="Название" minLength="2" maxLength="30" required />
                    <span className="title-input-error popup__input-error"></span>
                </label>
                <label className="popup__field">
                    <input id="link-input" className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" />
                    <span className="link-input-error popup__input-error"></span>
                </label>
                <input className="popup__submit" type="submit" name="submit" value="Создать"></input>
            </>
        );
    }

    function createMarkupAvatar() {
        return (
            <>
                <label className="popup__field">
                    <input id="link-input-avatar" className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" required />
                    <span className="link-input-avatar-error popup__input-error"></span>
                </label>
                <input className="popup__submit" type="submit" name="submit" value="Сохранить"></input>
            </>
        );
    }

    return (
        <div className={`popup ${props.name}-popup ${props.isOpen}`}>
            <div className="popup__container">
                <button className="popup__cross popup__close" type="button" onClick={props.onClose} ></button>
                <h3 className="popup__title">{props.title}</h3>
                <form className="popup__form" name={props.name} noValidate>
                    {props.name === "profile" && createMarkupProfile()}
                    {props.name === "card" && createMarkupCard()}
                    {props.name === "avatar" && createMarkupAvatar()}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;