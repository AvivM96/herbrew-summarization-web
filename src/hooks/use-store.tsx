import React from 'react';
import RootStore from '../stores/root-store';

export const StoreContext = React.createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;

export const useStore = (): RootStore => {
	return React.useContext<RootStore>(StoreContext);
};
