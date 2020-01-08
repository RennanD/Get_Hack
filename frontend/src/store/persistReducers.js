import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'gethack',
            storage,
            whitelist: ['auth', 'hackathon'],
        },
        reducers
    );

    return persistedReducer;
};
