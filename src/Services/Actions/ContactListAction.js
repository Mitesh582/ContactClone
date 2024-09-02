// actions.js
import Api from '../../Apis/fakeApi';
import { FETCH_CONTACTS, ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../Constant/actionType';



export const fetchContacts = () => async dispatch => {
    try {
        const response = await Api.get('/contacts');
        dispatch({ type: FETCH_CONTACTS, payload: response.data });
    } catch (error) {
        console.error('Failed to fetch contacts:', error);
    }
};

export const addContact = contact => async dispatch => {
    try {
        console.log("fdf");
        
        const response = await Api.post('/contacts', contact);
        console.log("re",response);
        
        dispatch({ type: ADD_CONTACT, payload: response.data });
    } catch (error) {
        console.error('Failed to add contact:', error);
    }
};

export const updateContact = contact => async dispatch => {
    try {
        const response = await Api.put(`${Api}/${contact.id}`, contact);
        dispatch({ type: UPDATE_CONTACT, payload: response.data });
    } catch (error) {
        console.error('Failed to update contact:', error);
    }
};

export const deleteContact = id => async dispatch => {
    try {
        await Api.delete(`${Api}/${id}`);
        dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
        console.error('Failed to delete contact:', error);
    }
};
