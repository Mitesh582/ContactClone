import { FETCH_CONTACTS, ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../Constant/actionType';

const initialState = {
    contacts: []
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            return { ...state, contacts: action.payload };
        case ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, action.payload] };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                )
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        default:
            return state;
    }
};

export default contactReducer;