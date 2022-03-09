import { useContext, createContext } from 'react';

const Context = createContext([]);

export function MenuProvider({ children }) {
  const links = [
    { title: "Home", href: "/", icon: "home" },
    { title: "Services", href: "/services", icon: "services" },
    { title: "Pricing", href: "/pricing", icon: "pricing" },
    { title: "Blog", href: "/blog", icon: "blog" },
  ];
  return (
    <Context.Provider value={links}>
      {children}
    </Context.Provider>
  );
}

export function useMenu() {
  return useContext(Context);
}
