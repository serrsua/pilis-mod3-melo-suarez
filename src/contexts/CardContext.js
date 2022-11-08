import { createContext, useState } from "react";
export const CardContext = createContext({
  cards: [],
  setCards: () => {},
});

export const CardContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const value = { cards, setCards };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
