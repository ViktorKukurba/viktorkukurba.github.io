import ShapesConstants from '../constants/ShapesConstants'


const shapes = (state = {count: 1}, action ) => {
  state.positions = state.positions || [...Array(state.count)].map(() => {
    return {rotate: {x: 0, y: 0, z: 0, a: 0}};
  });
  switch(action.type) {
    case ShapesConstants.SHAPE_CHANGE:
      window['ga'] && window['ga']('send', {
        hitType: 'event',
        eventCategory: 'ShapeSelect',
        eventAction: 'click',
        eventLabel: action.shape
      });
      return {...state, active: action.shape};

    case ShapesConstants.ROTATE_RANDOM_SHAPE:
      let payload = action.payload || {};
      let index = payload.index ||
          Math.floor(Math.random() * state.count);

      return {
        ...state,
        positions: [...state.positions.slice(0, index),
          rotateShapeRandomly(index, payload.capacity, state),
          ...state.positions.slice(index + 1, state.positions.length)]
      };

    case ShapesConstants.ROTATE_ALL_SHAPES:
      return {
        ...state,
        positions: rotateAllShapes(action.capacity, state)
      };

    default: return state;
  }
};

/** Rotates random shape. */
function rotateShapeRandomly(index, capacity = 1, state) {
  var rotation = (val = 20) => {
    return Math.random() * val * capacity
  };

  var item = state.positions[index];

  item.rotate = {
    x: rotation(),
    y: rotation(),
    z: rotation(),
    a: rotation(10)
  };

  return item;
}

/** Rotate all shapes. */
function rotateAllShapes(capacity, state) {
  var positions = [];
  for (var i = 0; i < state.count; i++) {
    positions.push(rotateShapeRandomly(i, capacity, state));
  }

  return positions
}

export default shapes;
