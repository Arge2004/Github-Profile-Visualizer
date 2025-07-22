import { createContext, useState, useContext} from 'react';
import type { ReactNode } from 'react';
import type { userInfo, repositoriesInfo } from '../types/UserTypes';

interface UserContextType {
  user: userInfo | null;
  setUser: (user: userInfo | null) => void;
  repositories: repositoriesInfo | null;
  setRepositories: (repositories: repositoriesInfo | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  notFound: boolean;
  setNotFound: (notFound: boolean) => void;
}

// 1. Creamos el contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// 2. Creamos el proveedor
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<userInfo | null>(null);
  const [repositories, setRepositories] = useState<repositoriesInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, setUser, repositories, setRepositories, loading, setLoading, notFound, setNotFound }}>
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