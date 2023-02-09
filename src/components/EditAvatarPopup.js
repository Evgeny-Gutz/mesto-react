import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
    return (
        <PopupWithForm 
            name="avatar" 
            title="Обновить аватар" 
            isOpen={isOpen && "popup_opened"} 
            onClose={onClose}>
                <label className="popup__field">
                     <input id="link-input-avatar" className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" required />
                     <span className="link-input-avatar-error popup__input-error"></span>
                 </label>
                 <input className="popup__submit" type="submit" name="submit" value="Сохранить"></input>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;