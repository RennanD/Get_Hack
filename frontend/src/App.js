import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import { Router } from 'react-router-dom';

import './config/reactotronConfig';

import { store, persistor } from './store';

import history from './services/history';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                    <GlobalStyles />
                    <ToastContainer autoClose={3000} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
