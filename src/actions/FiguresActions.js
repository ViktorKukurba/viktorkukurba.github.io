import FiguresDispatcher from '../dispatcher/FiguresDispatcher'
import FiguresConstants from '../constants/FiguresConstants'

export default {
  /** Rotates random shape. */
  rotateRandomShape() {
    FiguresDispatcher.dispatch({
      actionType: FiguresConstants.ROTATE_RANDOM_SHAPE
    });
  },

  /**
   * Rotates all shapes randomly.
   * @param {number=1} capacity
   */
  rotateAllShapes(capacity = 1) {
    FiguresDispatcher.dispatch({
      actionType: FiguresConstants.ROTATE_ALL_SHAPES,
      capacity
    });
  }
}