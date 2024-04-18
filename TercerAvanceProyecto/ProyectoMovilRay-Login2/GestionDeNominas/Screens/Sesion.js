import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ code: null, email: null, password: '', name: null, lastName: null, lastName2: null, RFC: null, NSS: null, CURP: null, number: null, entryDate: null });
  const [userCode, setUserCode] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, userCode, setUserCode }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
