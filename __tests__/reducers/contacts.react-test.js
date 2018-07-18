import contacts from '../../src/reducers/contacts'
import ContactsConstants from '../../src/constants/ContactsConstants'

const SOCIAL_MOCK = {social: ['fb', 'gh']}

describe('Test contacts reducer', () => {
  it('should return the initial state', () => {
    expect(contacts(undefined, {})).toEqual({});
  });

  it('should handle RETRIEVE_SOCIAL', () => {
    expect(contacts(undefined, {
      type: ContactsConstants.RETRIEVE_SOCIAL,
      ...SOCIAL_MOCK
    })).toEqual(SOCIAL_MOCK)
  });
});
