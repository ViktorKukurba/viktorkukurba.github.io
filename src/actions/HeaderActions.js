import HeaderDispatcher from '../dispatcher/HeaderDispatcher'
import HeaderConstants from '../constants/HeaderConstants'

var HeaderActions = {
  /**
   * Fires change active shape.
   * @param {string} shape
   */
  changeShape(shape) {
    HeaderDispatcher.dispatch({
      actionType: HeaderConstants.SHAPE_CHANGE,
      shape
    });
  }
};

export default HeaderActions;