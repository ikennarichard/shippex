import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
  getValueForUser: (key: any) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  async function save(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await SecureStore.setItemAsync("user", jsonValue);
    } catch (e) {
      console.error("Error storing user:", e);
    }
  }

  async function getValueForUser(key: any) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      const res = JSON.parse(result);
      setUser(res);
      router.navigate('/(tabs)')
    } else {
      console.log("No stored value for the user");
    }
  }
  useEffect(() => {
    const bootstrap = async () => {
      setIsLoading(false);
      getValueForUser('user')
    };
    bootstrap();
  }, []);

  const login = (userData: User) => {
    try {
      setUser(userData);
      save("user", userData);
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
    <AuthContext.Provider
      value={{ user, isLoading, login, logout, getValueForUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
