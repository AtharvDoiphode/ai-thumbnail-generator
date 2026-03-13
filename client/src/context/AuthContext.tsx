import toast from "react-hot-toast";
import type { IUser } from "../assests/assets";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../configs/api";

interface AuthContextProps {
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  login: (user: { email: string; password: string }) => Promise<void>;
  signUp: (user: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  isLoading: true,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
  login: async () => {},
  signUp: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // ✅ loading state

  const signUp = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    try {
      const { data } = await api.post('/auth/register', { name, email, password });
      if (data.user) {
        setUser(data.user as IUser);
        setIsLoggedIn(true);
      }
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Signup failed");
      console.log(error);
    }
  };

  const login = async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      if (data.user) {
        setUser(data.user as IUser);
        setIsLoggedIn(true);
      }
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed");
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const { data } = await api.post('/auth/logout');
      setUser(null);
      setIsLoggedIn(false);
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Logout failed");
      console.log(error);
    }
  };

  const fetchUser = async () => {
    try {
      const { data } = await api.get('/auth/verify');
      if (data.user) {
        setUser(data.user as IUser);
        setIsLoggedIn(true);
      }
    } catch (error) {
      setUser(null);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false); // ✅ done loading either way
    }
  };

  useEffect(() => {
    (async () => {
      await fetchUser();
    })();
  }, []);

  const value = {
    isLoggedIn,
    isLoading,
    setIsLoggedIn,
    user,
    setUser,
    login,
    signUp,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;