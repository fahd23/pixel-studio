import { useState, createContext, useContext } from "react";

const ListingContext = createContext(false);

const ListingProvider = ({ children }) => {
  const [navlinkToggle, setNavlinkToggle] = useState(false);
  return (
    <div>
      <ListingContext.Provider value={{ navlinkToggle, setNavlinkToggle }}>
        {children}
      </ListingContext.Provider>
    </div>
  );
};
const useListing = () => useContext(ListingContext);

export { useListing, ListingProvider };
