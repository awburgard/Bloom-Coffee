import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addEntry(action) {
    try {
        yield axios.post(`/api/tasting_journal`, action.payload)
        yield put({ type: 'GET_ENTRIES', payload: {user_id: action.payload.user_id}})
    } catch (error) {
        console.log('Error with adding entry:', error);
    }
};

function* getEntries(action) {
    try {
        const response = yield axios.get(`/api/tasting_journal/`)
        console.log('GET_ENTRIES - response: ', response);
        yield put({ type: 'SET_ENTRIES', payload: response.data })
    } catch (error) {
        console.log('Error with getting entries:', error);
    }
};


function* TastingJournal() {
    yield takeLatest('ADD_ENTRY', addEntry);
    yield takeLatest('GET_ENTRIES', getEntries);
};

export default TastingJournal;