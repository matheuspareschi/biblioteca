import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IUser } from '../../interfaces';

// Definimos o formato do contexto
type UserContextType = {
  user?: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
};

// Criamos o contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Componente de provedor do contexto
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Função de utilitário para acessar o contexto
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
}
