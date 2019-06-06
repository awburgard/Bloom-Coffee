function* getCoffeeShops(action) {
    try {
        const response = yield axios.get(`/api/coffee_shop/city/${action.payload.city_id}`)
        yield put({ type: 'SET_SHOPS', payload: response.data })
    } catch (error) {
        console.log('Error with getting shops:', error);
    }
}

function* TastingJournal() {
    yield takeLatest('GET_SHOPS', getCoffeeShops);
};

export default TastingJournal;