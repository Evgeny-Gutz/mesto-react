import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({isVisible:false, name: "", link: ""});

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
    <>
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
            onClose={closeAllPopups} />
        <PopupWithForm 
            name="card" 
            title="Новое место" 
            isOpen={isAddPlacePopupOpen && "popup_opened"} 
            onClose={closeAllPopups} />
        <PopupWithForm 
            name="avatar" 
            title="Обновить аватар" 
            isOpen={isEditAvatarPopupOpen && "popup_opened"} 
            onClose={closeAllPopups} />
        <ImagePopup
            onOpen={handleCardClick}
            card={selectedCard}
            onClose={closeAllPopups} />
    </>
  );
}

export default App;