import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore from "./stores/root-store";
import { StoreProvider } from './hooks/use-store';
import 'mobx-react-lite/batchingForReactDom';

(async function init() {
    const rootStore = new RootStore();
    rootStore.summarizationStore.loadHistory();

    ReactDOM.render(
        <React.StrictMode>
            <StoreProvider value={rootStore}>
                <App />
            </StoreProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
