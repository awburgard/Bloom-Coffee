import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addEntry(action) {
    try {
        yield axios.post(`/api/tasting_journal`, action.payload)
        yield put({ type: 'GET_ENTRIES', payload: { user_id: action.payload.user_id } })
    } catch (error) {
        console.log('Error with adding entry:', error);
    }
};

function* getEntries() {
    try {
        const response = yield axios.get(`/api/tasting_journal/`)
        yield put({ type: 'SET_ENTRIES', payload: response.data })
    } catch (error) {
        console.log('Error with getting entries:', error);
    }
};

function* deleteEntry(action) {
    try {
        yield axios.delete(`/api/tasting_journal/${action.payload}`)
        yield put({ type: 'GET_ENTRIES'})
    } catch (error) {
        console.log('Error deleting from database:', error);
    }
};

function* editEntry(action){
    try {
        const response = yield axios.put(`/api/tasting_journal/`, action.payload)
        yield put({type: 'GET_ENTRIES', payload: response.data})
    } catch (error) {
        console.log('Error updating from entry:', error);
    }
};


function* TastingJournal() {
    yield takeLatest('ADD_ENTRY', addEntry);
    yield takeLatest('GET_ENTRIES', getEntries);
    yield takeLatest('DELETE_ENTRY', deleteEntry);
    yield takeLatest('EDIT_ENTRY', editEntry);
};

export default TastingJournal;