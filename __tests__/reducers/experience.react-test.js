import ExperienceConstants from '../../src/constants/ExperienceConstants'
import experience from '../../src/reducers/experience'

describe('Test experience reducer', () => {
  it('technology visible', () => {
    let before = {technologies: [{
      name: 'asp'
    }, {
      name: 'js'
    }]};
    let after = {technologies: [{
      name: 'asp'
    }, {
      name: 'js',
      shown: true
    }]};
    expect(experience(before, {
      type: ExperienceConstants.TECH_VISIBLE,
      name: 'js'
    })).toEqual(after);
  });

  it('default case', () => {
    var before = {technologies: [{
      name: 'asp'
    }, {
      name: 'js'
    }]};
    expect(experience(before, {
      type: undefined
    })).toEqual(before);
  });
});