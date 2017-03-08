import ShapesConstants from '../../src/constants/ShapesConstants.js'
import shapes from '../../src/reducers/shapes'

describe('Test shapes reducer', () => {
  it('shape change', () => {
    let shapesState = shapes(undefined, {
      type: ShapesConstants.SHAPE_CHANGE,
      shape: 'box'
    });

    expect(shapesState).toBeDefined();
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
    expect(shapesState).toBeTruthy();
    expect(shapesState.positions).toBeDefined();
    expect(shapesState.positions).toBeInstanceOf(Array);
    expect(shapesState.positions.length).toEqual(1);
    expect(shapesState.positions[0].rotate).toBeDefined();
    ['x', 'y', 'z', 'a'].forEach((prop) => {
      expect(shapesState.positions[0].rotate[prop]).toBeGreaterThan(0)
    })

  });
});
