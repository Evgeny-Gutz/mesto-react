import React from "react";
import {useEffect, useState} from "react";
import avatar from "../images/image.jpg";
import api from "../utils/Api";
import Card from "../components/Card";
import {UserContext} from '../contexts/CurrentUserContext';

function Main(props) {
    // const [userName, setUserName] = useState('Жак-Ив Кусто');
    // const [userDescription , setUserDescription] = useState('Исследователь океана');
    // const [userAvatar, setUserAvatar] = useState(avatar);
    const [cards, setCards] = useState([]);
    const userData = React.useContext(UserContext);

    // function changeName() {
    //     setUserName(userData.name);
    // }
    
    // function changeDescription(res) {
    //     setUserDescription(res.about);
    // }
    
    // function changeAvatar(res) {
    //     setUserAvatar(res.avatar);
    // }

    useEffect(()=> {
        api.getInitialCards()
            .then((cardList) => {
                setCards([...cards, ...cardList]);
            })
            .catch((error) => console.log(`Ошибка при загрузке карточек: ${error}`))
    }, []);
    
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__change-avatar" onClick={props.onEditAvatar}></div>
                <img className="profile__avatar" src={userData.avatar} alt="Жак-Ив Кусто" />
                <div className="profile__info">
                    <h1 className="profile__name">{userData.name}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__profession">{userData.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                    ))
                }
            </section>
        </main>
    );
}

export default Main;