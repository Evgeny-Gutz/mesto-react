import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from "../utils/Api";
import {UserContext} from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({isVisible:false, name: "", link: ""});
    const [currentUser, setCurrentUser] = React.useState({});

    function closeAllPopups () {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard({...selectedCard, isVisible: false});
    }

    function handleCardClick (dataNameLink) {
        setSelectedCard({...selectedCard, isVisible: true, ...dataNameLink});
    }

    function handleEscClose (evt) {
        if(evt.key == 'Escape') closeAllPopups();
    }

    function handleBackgroundClose(evt) {
        if(evt.target.classList.contains('popup_opened')) closeAllPopups();
    }

    React.useEffect(() => {
        api.getDataUser()
            .then((res) => {setCurrentUser(res)});
    }, []);
    
    React.useEffect( () => {
        document.addEventListener('keydown', handleEscClose);
        document.addEventListener('mousedown', handleBackgroundClose);

        return () => {
            document.addEventListener('mousedown', handleBackgroundClose);
            document.addEventListener('keydown', handleEscClose);   
        }
    });
    
    function handleEditAvatarClick () {
        setEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick () {
        setEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick () {
        setAddPlacePopupOpen(true);
    }

    return (
    <UserContext.Provider value={currentUser}>
        <Header />
        <Main 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm 
            name="profile" 
            title="Редактировать профиль" 
            isOpen={isEditProfilePopupOpen && "popup_opened"} 
            onClose={closeAllPopups}>
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
        <PopupWithForm 
            name="card" 
            title="Новое место" 
            isOpen={isAddPlacePopupOpen && "popup_opened"} 
            onClose={closeAllPopups}>
                <label className="popup__field">
                     <input id="title-input" className="popup__input popup__input_type_title" type="text" name="title" placeholder="Название" minLength="2" maxLength="30" required />
                     <span className="title-input-error popup__input-error"></span>
                 </label>
                 <label className="popup__field">
                     <input id="link-input" className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" />
                     <span className="link-input-error popup__input-error"></span>
                 </label>
                 <input className="popup__submit" type="submit" name="submit" value="Создать"></input>
        </PopupWithForm> 
        <PopupWithForm 
            name="avatar" 
            title="Обновить аватар" 
            isOpen={isEditAvatarPopupOpen && "popup_opened"} 
            onClose={closeAllPopups}>
                <label className="popup__field">
                     <input id="link-input-avatar" className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" required />
                     <span className="link-input-avatar-error popup__input-error"></span>
                 </label>
                 <input className="popup__submit" type="submit" name="submit" value="Сохранить"></input>
        </PopupWithForm>
        <ImagePopup
            onOpen={handleCardClick}
            card={selectedCard}
            onClose={closeAllPopups} />
    </UserContext.Provider>
  );
}

export default App;