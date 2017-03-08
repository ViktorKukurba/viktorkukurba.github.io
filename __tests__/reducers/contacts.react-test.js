import contacts from '../../src/reducers/contacts'
import ContactsConstants from '../../src/constants/ContactsConstants'

describe('Test contacts reducer', () => {
  it('send message', () => {
    expect(contacts(undefined, {
      type: ContactsConstants.SEND_MESSAGE
    })).toEqual({
      form: {
        sending: true
      }
    })
  });

  it ('send success', () => {
    expect(contacts(undefined, {
      type: ContactsConstants.SEND_SUCCESS
    })).toEqual({
      form: {
        sending: false,
            alert: {
          message: ContactsConstants.SUBMIT_SUCCESS,
              show: true
        }
      }
    })
  });

  it ('send error', () => {
    expect(contacts(undefined, {
      type: ContactsConstants.SEND_ERROR
    })).toEqual({
      form: {
        sending: false,
        alert: {
          message: ContactsConstants.SUBMIT_ERROR,
          show: true
        }
      }
    })
  });

  it ('close message', () => {
    expect(contacts(undefined, {
      type: ContactsConstants.CLOSE_MESSAGE
    })).toEqual({
      form: {
        alert: {
          show: false
        },
        sending: false
      }
    })
  });

  it ('default', () => {
    expect(contacts(undefined, {
      type: undefined
    })).toEqual({});
  });
});

