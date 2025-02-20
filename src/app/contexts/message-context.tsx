"use client";

import { createContext, useContext, useState } from "react";

interface MessageContextType {
  message: string;
  setMessage: (message: string) => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage deve ser usado dentro de um MessageProvider");
  }
  return context;
}
