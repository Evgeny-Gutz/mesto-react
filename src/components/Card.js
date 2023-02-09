import React from "react";
import {UserContext} from '../contexts/CurrentUserContext';

function Card({card, onCardClick}) {
    const userData = React.useContext(UserContext);
    const isOwner = card._id === userData._id;
    const isLiked = card.likes.some( i => i._id === userData._id);
    const cardLikeButtonClassName  = (`element__like ${ isLiked && 'element__like_active'}`);

    function handleClick() {
        onCardClick({name: card.name, link: card.link});
      } 

    return (
        <article className="element">
            {isOwner && <button className="element__delete-icon" type="button"></button>}
            <img className="element__img" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__group">
                <h2 className="element__text">{card.name}</h2>
                <div>
                    <button className={cardLikeButtonClassName} type="button"></button>
                    <span className="element__like-counter">{card.counter}</span>
                </div>
            </div>
        </article>
    );
}

export default Card;