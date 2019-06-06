import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCoffeeShops(action) {
    try {
        const response = yield axios.get(`/api/coffee_shop/city/${action.payload.city_id}`)
        yield put({ type: 'SET_SHOPS', payload: response.data })
    } catch (error) {
        console.log('Error with getting shops:', error);
    }
}

function* getShops() {
    yield takeLatest('GET_SHOPS', getCoffeeShops);
};

export default getCoffeeShops;