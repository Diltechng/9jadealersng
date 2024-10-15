import { createContext, useState, useEffect } from 'react';
import useDeviceType from '../Hooks/Devicewidthhook';

export const SidebarContext = createContext({
  openSideBar: false,
  setOpenSideBar: () => {},
});


export const SidebarProvider = ({ children }) => {
    const {isDesktop} = useDeviceType();
  const [openSideBar, setOpenSideBar] = useState(false);
  useEffect(() => {
    setOpenSideBar(isDesktop);
  }, [isDesktop]);

  const toggleSidebar = () => {
    setOpenSideBar((prevState) => !prevState);
  };
  return (
    <SidebarContext.Provider value={{ openSideBar, setOpenSideBar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};