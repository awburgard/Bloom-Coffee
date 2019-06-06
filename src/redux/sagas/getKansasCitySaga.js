import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getKansasCity() {
    try {
       const response =  yield axios.get(`/api/cities/kansas_city`)
        yield put({ type: 'SET_KC', payload: response.data})
    } catch (error) {
        console.log('Error with getting shops:', error);
    }
}

function* getKansasCityCoffeeShops() {
    yield takeLatest('GET_KC', getKansasCity);
};

export default getKansasCityCoffeeShops;