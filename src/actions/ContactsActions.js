import ContactsConstants from '../constants/ContactsConstants'

var ContactsActions = {
  /**
   * Fires social icon click event.
   * @param {Object} social
   */
  socialClick(social) {
    return {
      type: ContactsConstants.SOCIAL_CLICK,
      social
    }
  },

  /**
   * Fetch social contacts.
   * @return {Function} dispatch function.
   */
  fetchSocialContacts() {
    return (dispatch) => fetch('/data/social.json').then(response => {
      response.json().then(social => {
        dispatch({
          type: ContactsConstants.RETRIEVE_SOCIAL,
          social
        })
      })
    })
  },
};

export default ContactsActions;