import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => {
      return [...currentFavIds, id];
    });
  };
  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => {
      return currentFavIds.filter((mealId) => id !== mealId);
    });
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
