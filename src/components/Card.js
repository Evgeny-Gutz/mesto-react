function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick({name: card.name, link: card.link});
      }  

    return (
        <article className="element">
            <button className="element__delete-icon" type="button"></button>
            <img className="element__img" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__group">
                <h2 className="element__text">{card.name}</h2>
                <div>
                    <button className="element__like" type="button"></button>
                    <span className="element__like-counter">{card.counter}</span>
                </div>
            </div>
        </article>
    );
}

export default Card;