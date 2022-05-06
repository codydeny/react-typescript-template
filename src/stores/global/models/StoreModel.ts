import { Action } from "easy-peasy";
import { Theme } from "./theme.types";

export interface StoreModel {
  user: {
    isLoggedIn: boolean;
    email: string;
  };
  settings: {
    theme: Theme;
  };
  updateSettings: Action<StoreModel, any>;
}
