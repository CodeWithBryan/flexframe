import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  uuid: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  permissions: string[];
}

interface AuthState {
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
}

const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      token: null,
      user: null,
      login: (token: string, user: User) => set({ token, user }),
      logout: () => set({ token: null, user: null }),
      setToken: (token: string | null) => set({ token }),
      setUser: (user: User | null) => set({ user }),
    }),
    { name: "auth" },
  )
);

export type { User, AuthState };
export default useAuthStore;
