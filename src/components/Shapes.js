import React, {Component} from 'react'
import ShapesActions from '../actions/ShapesActions'
import '../Shapes.css'

import store from '../reducers/index'

/**
 * Shapes component.
 * @extends Component
 * @class
 */
class Shapes extends Component {
  /** Creates Shapes component. */
  constructor() {
    super();
    var shapesData = store.getState().shapes;
    this.state = {
      /** @type {Array} */
      positions: shapesData.positions,
      activeShape: shapesData.active
    };

    this.setActiveShape = (shape) => this.setState({
      activeShape: shape
    });

    var time = +new Date();

    this.rotateShapes = () => {
      if (+new Date() - time > 1e3) {
        time = +new Date();
        store.dispatch(ShapesActions.rotateAllShapes(8));
      }
    }
  }

  /**
   * Default component properties.
   * @property {Object!}
   * @property {string} defaultProps.shape
   */
  static defaultProps = {
    shape: 'triangle'
  };

  /**
   * Gets transform string value from shape rotation.
   * @param {{x: number, y: number, z: number, a: number}} rotate
   * @return {string}
   */
  static getTransformVal(rotate) {
    return `rotate3d(${rotate.x}, ${rotate.y}, ${rotate.z}, ${rotate.a}deg)
    translate(-50%, -50%)`;
  }

  /** Bind stores events handlers. */
  componentWillMount() {
    this.storeUnsubscribe = store.subscribe(() => {
      let state = store.getState();
      this.setState({
        activeShape: state.shapes.active,
        positions: state.shapes.positions
      });
    });
    this.intervalId = setInterval(() =>
        store.dispatch(ShapesActions.rotateRandomShape()), 1e3);
    window.addEventListener('scroll', this.rotateShapes);
  }

  /** Unbind stores events handlers. */
  componentWillUnMount() {
    this.storeUnsubscribe();
    window.removeEventListener('scroll', this.rotateShapes);
    clearInterval(this.intervalId);
  }

  /**
   * Renders shapes.
   * @return {string} JSX string.
   */
  renderShapes() {
    return this.state.positions.map((figure, i) => {
      let transformVal = {
        "transform": Shapes.getTransformVal(figure.rotate)
      };
      return (
          <div className="figure-box col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12"
              key={i}>
            <img alt="figure" style={transformVal}
                src={'images/figures/' + this.state.activeShape + '_' + i + '.png'}/>
          </div>)
    });
  }

  /**
   * Renders component
   * @return {string} JSX string.
   */
  render() {
    return (<div className={"figures-wrapper " + this.props.shape }>
        {this.renderShapes()}</div>)
  }
}

export default Shapes
