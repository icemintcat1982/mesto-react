import React from "react";
import {api} from "../utils/Api";
import Card from './Card';


function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    
    React.useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getCards()
        ])
        .then(([userData, cardsData]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);  
            setCards(cardsData);  
            
        })
        .catch((err) => {
            console.log(err)
        })
         
    },
    []
    )
console.log(cards)

    return(
        <main className="main">
            <section className="profile">
                <button 
                className="profile__avatar-edit-btn" 
                type="button" 
                onClick={onEditAvatar}>
                <img className="profile__avatar" src={userAvatar} alt="avatar" />
                </button>

                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button
                        className="profile__button profile__button_type_edit"
                        type="button"
                        title="edit profile"
                        onClick={onEditProfile}></button>
                    <p className="profile__description">{userDescription}</p>
                </div>

                <button
                    className="profile__button profile__button_type_add"
                    type="button"
                    title="add photo"
                    onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => {
                    return(
                        <Card
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                        />
                    )
                })}
            </section>
            </main>

    );
}

export default Main