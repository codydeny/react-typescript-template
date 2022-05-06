import { createStore, action } from "easy-peasy";
import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "./models/StoreModel";
import { Theme } from "./models/theme.types";

const intialState = {
  user: {
    isLoggedIn: true,
    email: "",
  },
  settings: {
    theme: Theme.SYSTEM,
  },
};

export default createStore<StoreModel>({
  ...intialState,

  updateSettings: action((state, payload) => {
    state.settings = payload;
  }),
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
