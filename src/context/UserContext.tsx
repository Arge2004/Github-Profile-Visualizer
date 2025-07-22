import { createContext, useState, useContext} from 'react';
import type { ReactNode } from 'react';
import type { userInfo } from '../types/UserTypes';

interface UserContextType {
  user: userInfo | null;
  setUser: (user: userInfo | null) => void;
}

// 1. Creamos el contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// 2. Creamos el proveedor
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<userInfo | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Creamos un hook para usar el contexto

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser debe usarse dentro de un <UserProvider>");
  }

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useUser };