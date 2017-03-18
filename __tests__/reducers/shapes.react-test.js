import ShapesConstants from '../../src/constants/ShapesConstants.js'
import shapes from '../../src/reducers/shapes'

describe('Test shapes reducer', () => {
  it('shape change', () => {
    let shapesState = shapes(undefined, {
      type: ShapesConstants.SHAPE_CHANGE,
      shape: 'box'
    });

    verifyPositions(shapesState, 1, false);
    expect(shapesState.active).toBeDefined();
    expect(shapesState.active).toEqual('box');

   shapesState = shapes({active: 'circle'}, {
     type: ShapesConstants.SHAPE_CHANGE,
     shape: 'box'
   });

    expect(shapesState.active).toEqual('box');
  });

  it('shapes random rotation', () => {
    let shapesState = shapes(undefined, {
      type: ShapesConstants.ROTATE_RANDOM_SHAPE
    });
    verifyPositions(shapesState, 1);
  });

  it('rotate all shapes randomly', () => {
    let count = 3;
    let shapesState = shapes({
      count
    }, {
      type: ShapesConstants.ROTATE_ALL_SHAPES
    });
    verifyPositions(shapesState, count);
  });

  it('default shapes', () => {
    let count = 2;
    let shapesState = shapes({
      count
    }, {
      type:undefined
    });

    verifyPositions(shapesState, count, false);

  });

  /**
   * Verifies shapes positions.
   * @param {Object} shapesState
   * @param {number} count
   * @param {boolean} random
   */
  function verifyPositions(shapesState, count, random = true) {
    expect(shapesState).toBeTruthy();
    expect(shapesState.positions).toBeDefined();
    expect(shapesState.positions).toBeInstanceOf(Array);
    expect(shapesState.positions.length).toEqual(count);

    shapesState.positions.forEach((position) => {
      expect(position.rotate).toBeDefined();
      ['x', 'y', 'z', 'a'].forEach((prop) => {
        if (random) {
          expect(position.rotate[prop]).toBeGreaterThan(0);
        } else {
          expect(position.rotate[prop]).toBe(0);
        }

      })
    });
  }
});