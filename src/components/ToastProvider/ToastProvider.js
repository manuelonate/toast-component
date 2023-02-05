import React from 'react';

export const ToastContext = React.createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast({ message, variant }) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    const newList = [...toasts, newToast];
    setToasts(newList);
  }

  function removeToast(id) {
    const newList = toasts.filter((item) => item.id !== id);
    setToasts(newList);
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}
