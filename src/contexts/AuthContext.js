import React, { useContext, useState, useEffect, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { appAuth } from '../utils/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    console.log(user);
    appAuth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) history.push('/chats');
    });
  }, [user, history]);

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
