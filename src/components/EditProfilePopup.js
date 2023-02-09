import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
    return (
        <PopupWithForm 
            name="profile" 
            title="Редактировать профиль" 
            isOpen={isOpen && "popup_opened"} 
            onClose={onClose}>
                <label className="popup__field">
                    <input id="name-input" className="popup__input popup__input_type_name" type="text" name="name" minLength="2" maxLength="40" required />
                    <span className="name-input-error popup__input-error"></span>
                </label>
                <label className="popup__field">
                    <input id="profession-input" className="popup__input popup__input_type_job" type="text" name="profession" minLength="2" maxLength="200" required />
                    <span className="profession-input-error popup__input-error"></span>
                </label>
                <input className="popup__submit" type="submit" name="submit" value="Сохранить"></input>
        </PopupWithForm>
    );
}

export default EditProfilePopup;