import { useState, useContext, createContext } from "react";

const DataContext = createContext({
  links: [],
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const HOME = { title: "Home", href: "/", icon: "home" };
const SERVICES = { title: "Services", href: "/services", icon: "services" };
const PRICING = { title: "Pricing", href: "/pricing", icon: "pricing" };
const BLOG = { title: "Blog", href: "/blog", icon: "blog" };
const PROFILE = { title: "Profile", href: "/profile", icon: "profile" };

export function DataProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);
  const links = [HOME, SERVICES, PRICING, BLOG].concat(
    isLoggedIn ? [PROFILE] : []
  );
  const value = { links, isLoggedIn, login, logout };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
