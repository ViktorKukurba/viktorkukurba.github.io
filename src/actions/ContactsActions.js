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
   * Send contact form action.
   * @return {Object}
   */
  sendMessage() {
    return {
      type: ContactsConstants.SEND_MESSAGE
    }
  },

  sendSuccess() {
    return {
      type: ContactsConstants.SEND_SUCCESS
    }
  },

  sendError() {
    return {
      type: ContactsConstants.SEND_ERROR
    }
  }
};

export default ContactsActions;