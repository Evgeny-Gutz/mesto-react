function Card(props) {
    function handleClick() {
        props.onCardClick({name: props.card.name, link: props.card.link});
      }  

    return (
        <article className="element">
            <button className="element__delete-icon" type="button"></button>
            <img className="element__img" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <div className="element__group">
                <h2 className="element__text">{props.card.name}</h2>
                <div>
                    <button className="element__like" type="button"></button>
                    <span className="element__like-counter">{props.card.counter}</span>
                </div>
            </div>
        </article>
    );
}

export default Card;