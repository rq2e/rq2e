import { useState, useContext, createContext } from 'react';

const Context = createContext([]);

const HOME = { title: "Home", href: "/", icon: "home" };
const SERVICES = { title: "Services", href: "/services", icon: "services" };
const PRICING = { title: "Pricing", href: "/pricing", icon: "pricing" };
const BLOG = { title: "Blog", href: "/blog", icon: "blog" };
const PROFILE = { title: "Profile", href: "/profile", icon: "profile" };

export function MenuProvider({ children }) {
  const [links, setLinks] = useState([HOME, SERVICES, PRICING, BLOG]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
    setLinks(list => list.concat([PROFILE]));
  }
  const logout = () => {
    setLoggedIn(false);
    setLinks(list => list.filter(item => item !== PROFILE));
  }
  const value = {links, isLoggedIn, login, logout};
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export function useMenu() {
  return useContext(Context);
}
