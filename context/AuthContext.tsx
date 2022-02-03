import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import { TOKEN_STORAGE_KEY } from '../lib/auth';
import { get, post } from '../lib/restClient';

type AuthContextType = {
  user: any | null;
  checkedInitialUser: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [checkedInitialUser, setCheckedInitialUser] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  const checkLogin = async () => {
    if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
      try {
        const { data } = await get('/users/me');
        setUser(data);
      } catch (err) {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        window.location.href = '';
      } finally {
        setCheckedInitialUser(true);
      }
    } else {
      setCheckedInitialUser(true);
    }
  };

  const login = async (email: string, password: string) => {
    const { data } = await post('/auth/login', {
      email,
      password,
    });

    localStorage.setItem(TOKEN_STORAGE_KEY, data.access_token);

    window.location.reload();
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    window.location.href = '';
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const value = {
    user,
    login,
    logout,
    checkedInitialUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
