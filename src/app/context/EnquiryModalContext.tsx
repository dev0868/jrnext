'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const EnquiryModalContext = createContext({
  open: false,
  show: () => {},
  hide: () => {},
});

export const useEnquiryModal = () => useContext(EnquiryModalContext);

export const EnquiryModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  return (
    <EnquiryModalContext.Provider value={{ open, show, hide }}>
      {children}
    </EnquiryModalContext.Provider>
  );
};
