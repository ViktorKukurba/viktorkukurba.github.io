import ShapesConstants from '../constants/ShapesConstants'

export default {
  /**
   * Rotates random shape.
   * @return {{type: string}} Action object.
   */
  rotateRandomShape() {
    return {
      type: ShapesConstants.ROTATE_RANDOM_SHAPE
    }
  },

  /**
   * Rotates all shapes randomly.
   * @param {number=1} capacity
   * @return {{type: string}} Action object.
   */
  rotateAllShapes(capacity = 1) {
    return {
      type: ShapesConstants.ROTATE_ALL_SHAPES,
      capacity
    }
  },

  /**
   * Change shape.
   * @param {string} shape
   * @return {{type: string}} Action object.
   */
  changeShape(shape) {
    return {
      type: ShapesConstants.SHAPE_CHANGE,
      shape
    }
  }
}