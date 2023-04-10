import React from 'react';
import { api } from '../utils/Api';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [cards, setCards] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});

    
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
    };
    
    const handleEditProfileClick = () => {
       setIsEditProfilePopupOpen(true)
    };
    
    const handleAddPlaceClick = () => {
       setIsAddPlacePopupOpen(true)
    };

    const handleCardClick = (card) => {
        setSelectedCard(card)
    };

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    const handleCardDelete = (card) => {
            api.delete(card._id)
              .then(() => {
                setCards(cards.filter((element) => element !== card))
              })
              .catch((err) => console.log(err))
          }
    
    const onUpdateUser = (userData) => {
        api.setUserInfoApi(userData)
        .then((data) => {
            setCurrentUser(data)
            closeAllPopups()
        })
        .catch((err) => console.log(err))
    }

    const onUpdateAvatar = (userData) => {
        api.handleUserAvatar(userData)
        .then((data) => {
            setCurrentUser(data)
            closeAllPopups()
        }) 
        .catch((err) => console.log(err))
    }

    const handleAddPlaceSubmit = (cardsData) => {
        api.addUserCard(cardsData)
        .then((newCard) => {
            setCards([newCard, ...cards])
            closeAllPopups()
        })
        .catch((err) => console.log(err))
    }


    React.useEffect(() => {
        Promise.all([
            api.getCards()
        ])
        .then(([cardsData]) => {
            setCards(cardsData);  
        })
        .catch((err) => {
            console.log(err)
        })    
    },
    []
    )
console.log(cards)

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    };

    React.useEffect(() => {
        api.getUserInfo()
          .then((data) => {
            setCurrentUser(data)
          })
          .catch((err) => console.log(err))
      }, [])

    
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
<Header/>
<Main 
onEditAvatar={handleEditAvatarClick}
onEditProfile={handleEditProfileClick}
onAddPlace={handleAddPlaceClick}
onCardClick={handleCardClick}
onCardLike={handleCardLike}
onCardDelete={handleCardDelete}

/>
<Footer/>
<EditProfilePopup
 isOpen={isEditProfilePopupOpen}
 onClose={closeAllPopups}
 onUpdateUser={onUpdateUser}
 />
<EditAvatarPopup 
isOpen={isEditAvatarPopupOpen} 
onClose={closeAllPopups}
onUpdateAvatar={onUpdateAvatar} />

<AddPlacePopup
isOpen={isAddPlacePopupOpen}
onClose={closeAllPopups}
onAddPlace={handleAddPlaceSubmit} />


<ImagePopup
card={selectedCard}
onClose={closeAllPopups}/>

       <template id="element__card">
        </template>

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App