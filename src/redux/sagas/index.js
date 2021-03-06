import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import tastingJournalSaga from './tastingJournalSaga'
import getShops from './getCoffeeShopsSaga';
import getKansasCityCoffeeShops from './getKansasCitySaga';
import TastingJournalEntry from './getTastingJournalEntrySaga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    tastingJournalSaga(),
    getKansasCityCoffeeShops(),
    getShops(),
    TastingJournalEntry(),
    ]);
}
