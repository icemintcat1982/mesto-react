import React from "react";
import { api } from "../utils/Api";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
        React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState({});

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleCardLike = (card) => {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) =>
                state.map((с) => (с._id === card._id ? newCard : с))
            );
        })
        .catch((err) => console.log(err));
    };

    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
            .then(() => {
                setCards(cards.filter((element) => element._id !== card._id));
            })
            .catch((err) => console.log(err));
    };

    const onUpdateUser = ({ name, about }) => {
        api.updateUserInfo({ name, about })
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    };

    const onUpdateAvatar = ({ avatar }) => {
        api.changeUserAvatar({ avatar })
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    };

    const handleAddPlaceSubmit = ({ place, link }) => {
        api.addNewCard({ place, link })
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    };

    React.useEffect(() => {
        Promise.all([api.getCards(), api.getUserInfo()])
            .then(([cardsData, data]) => {
                setCards(cardsData);
                setCurrentUser(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    cards={cards}
                />
                <Footer />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={onUpdateUser}
                />
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={onUpdateAvatar}
                />

                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />

                <template id="element__card"></template>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
