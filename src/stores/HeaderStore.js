import HeaderDispatcher from '../dispatcher/HeaderDispatcher'
import HeaderConstants from '../constants/HeaderConstants'
import EventEmitter from 'events'

var CHANGE_EVENT = HeaderConstants.SHAPE_CHANGE;

/**
 * HeaderStore
 * @extends EventEmitter
 * @class
 */
class HeaderStore extends EventEmitter {
  /** Creates header store. */
  constructor() {
    super();
    this.state = {
      shapes: ['sphere', 'hexagon', 'triangle'],
      links: ['about', 'experience', 'portfolio', 'knowledge-sharing', 'contacts']
    };

    this.state.activeShape = this.state.shapes[
        Math.floor(Math.random() * this.state.shapes.length)];
  }

  /**
   * Gets shapes.
   * @return {Array<string>}
   */
  getShapes() {
    return this.state.shapes;
  }

  /**
   * Gets site navigation links.
   * @return {Array<string>}
   */
  getLinks() {
    return this.state.links;
  }

  /**
   * Gets active shape.
   * @return {string}
   */
  getActiveShape() {
    return this.state.activeShape;
  }

  /**
   * Changes selected shape.
   * @param {string} shape Selected shape.
   */
  changeShape(shape) {
    if (this.state.shapes.indexOf(shape) > -1
        && shape !== this.state.activeShape) {
      this.state.activeShape = shape;
      this.emit(CHANGE_EVENT, shape);
      window['ga']('send', {
        hitType: 'event',
        eventCategory: 'ShapeSelect',
        eventAction: 'click',
        eventLabel: shape
      });
    }
  }

  /**
   * Adds change shape listener.
   * @param {Function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  /**
   * Removes change shape listener.
   * @param {Function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  handleActions(payload) {
    switch (payload.actionType) {
      case HeaderConstants.SHAPE_CHANGE: {
        this.changeShape(payload.shape);
        break;
      }
      default:
        return true;
    }
    return true;
  }
}

var headerStore = new HeaderStore();

HeaderDispatcher.register(headerStore.handleActions.bind(headerStore));

export default headerStore;