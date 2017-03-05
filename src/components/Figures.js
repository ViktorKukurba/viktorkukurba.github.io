import React, {Component} from 'react'
import HeaderStore from '../stores/HeaderStore'
import FiguresStore from '../stores/FiguresStore'
import FiguresConstants from '../constants/FiguresConstants'
import FigureActions from '../actions/FiguresActions'
import '../Figures.css'

/**
 * Figures component.
 * @extends Component
 * @class
 */
class Figures extends Component {
  /** Creates Figures component. */
  constructor() {
    super();
    this.state = {
      /** @type {Array} */
      shapes: FiguresStore.getShapesPosition(),
      activeShape: HeaderStore.getActiveShape()
    };

    this.shapesPositionChangeHandler = () => {
      this.setState({
        shapes: FiguresStore.getShapesPosition()
      })
    };

    this.setActiveShape = (shape) => this.setState({
      activeShape: shape
    })
  }

  /**
   * Default component properties.
   * @property {Object!}
   * @property {string} defaultProps.shape
   */
  static defaultProps = {
    shape: 'triangle'
  };

  /** Bind stores events handlers. */
  componentWillMount() {
    FiguresStore.on(FiguresConstants.CHANGE_SHAPE_POSITION,
        this.shapesPositionChangeHandler);

    HeaderStore.addChangeListener(this.setActiveShape);

    this.intervalId = setInterval(FigureActions.rotateRandomShape, 1e3);

    window.addEventListener('scroll', function(evt) {
      FigureActions.rotateAllShapes(2);
    });
  }

  /** Unbind stores events handlers. */
  componentWillUnMount() {
    FiguresStore.removeListener(FiguresConstants.CHANGE_SHAPE_POSITION,
        this.shapesPositionChangeHandler);
    HeaderStore.removeChangeListener(this.setActiveShape);
    clearInterval(this.intervalId);
  }

  /**
   * Renders figures.
   * @return {string} JSX string.
   */
  renderFigures() {
    return this.state.shapes.map((figure, i) => {
      let transformVal = {
        "transform": `rotate3d(${figure.rotate.x}, ${figure.rotate.y}, ${figure.rotate.z}, ${figure.rotate.a}deg)` +
        ' translate(-50%, -50%)'
      };
      return (
          <div className="figure-box col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12" key={i}>
          <img alt="figure" style={transformVal}
              src={'images/figures/' + this.state.activeShape + '_' + i + '.png'}/>
          </div>
      )
    });
  }

  /**
   * Renders component
   * @return {string} JSX string.
   */
  render() {
    return (
        <div className={"figures-wrapper " + this.props.shape }>
        {this.renderFigures()}
            </div>
        )
  }
}

export default Figures