import ContactsConstants from '../constants/ContactsConstants'

const contacts = (state = {}, action) => {
  switch(action.type) {
    case ContactsConstants.RETRIEVE_SOCIAL:
      return {...state, social: action.social}

    default: return state;
  }
};

export default contacts;