import ContactsConstants from '../constants/ContactsConstants'

const contacts = (state = {}, action) => {
  switch(action.type) {
    case ContactsConstants.SEND_MESSAGE: return Object.assign({}, state, {
      form: {
        sending: true
      }
    });

    case ContactsConstants.SEND_SUCCESS: return Object.assign({}, state, {
      form: {
        sending: false,
        alert: {
          message: ContactsConstants.SUBMIT_SUCCESS,
          show: true
        }
      }
    });

    case ContactsConstants.SEND_ERROR: return Object.assign({}, state, {
      form: {
        sending: false,
        alert: {
          message: ContactsConstants.SUBMIT_ERROR,
          show: true
        }
      }
    });

    case ContactsConstants.CLOSE_MESSAGE:
      let form = state.form || {};
      return Object.assign({}, state, {
        form: {
          alert: Object.assign({}, form.alert, {
            show: false
          }),
          sending: !!form.sending
        }
      });

    default: return state;
  }
};

export default contacts;