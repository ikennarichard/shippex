import { useRouter } from "expo-router";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  email: string;
  // url: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const bootstrap = async () => {
      setIsLoading(false);
    };
    bootstrap();
  }, []);

  const login = (userData: User) => {
    try {
      setUser(userData);
    } catch (error) {
      console.error(error);
    } finally {
      router.navigate("/(tabs)");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
