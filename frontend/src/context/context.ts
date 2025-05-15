import { createContext } from "react";
import { type AlertProp, type AuthUser } from "./context-type";

export type ContextTypes = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  alert: AlertProp | null;
  setAlert: React.Dispatch<React.SetStateAction<AlertProp | null>>;
};

export const Context = createContext<ContextTypes | undefined>(undefined);
