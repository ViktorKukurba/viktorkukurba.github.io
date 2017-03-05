import EventsEmitter from 'events'
import FiguresConstants from '../constants/FiguresConstants'
import FiguresDispatcher from '../dispatcher/FiguresDispatcher'


class FiguresStore extends EventsEmitter {
  /** Creates figures store. */
  constructor(shapesCount = 6) {
    super();
    this.shapesPosition = [];

    [...Array(shapesCount)].forEach(() => {
      this.shapesPosition.push({
        rotate: { x: 0, y: 0, z: 0, a: 0 }});
    });

    this.shapesCount = shapesCount;
  }

  /** Rotates random shape. */
  rotateShapeRandomly(index, capacity = 1) {
    index = index || Math.floor(Math.random() * (this.shapesCount - 1));
    var rotation =(val = 20) => {
      return Math.random() * val * capacity
    };
    this.shapesPosition[index].rotate = {
      x: rotation(),
      y: rotation(),
      z: rotation(),
      a: rotation(30)
    };
  }

  /** Rotate all shapes. */
  rotateAllShapes(capacity) {
    for (var i = 0; i < this.shapesCount; i++) {
      this.rotateShapeRandomly(i, capacity);
    }
  }

  /**
   * Gets shapes position.
   * @return {Array}
   */
  getShapesPosition() {
    return this.shapesPosition;
  }

  /**
   * Handles figures actions.
   * @param {Object} payload
   */
  handleActions(payload) {
    switch (payload.actionType) {
      case FiguresConstants.ROTATE_RANDOM_SHAPE: {
        this.rotateShapeRandomly();
        this.emit(FiguresConstants.CHANGE_SHAPE_POSITION);
        return true;
      }
      case FiguresConstants.ROTATE_ALL_SHAPES: {
        this.rotateAllShapes(payload.capacity);
        this.emit(FiguresConstants.CHANGE_SHAPE_POSITION);
        return true;
      }
      default: return true;
    }
  }
}

var figuresStore = new FiguresStore();

FiguresDispatcher.register(figuresStore.handleActions.bind(figuresStore));

export default figuresStore