import SectionConstants from '../../src/constants/SectionConstants'
import sections from '../../src/reducers/sections'

describe('Test section reducer', () => {
  it('visible section', () => {
    expect(sections(undefined, {
      type: SectionConstants.SECTION_VISIBLE,
      section: 'test'
    })).toEqual({
      active: ['test']
    });

    expect(sections({active: ['test']}, {
      type: SectionConstants.SECTION_VISIBLE,
      section: 'test'
    })).toEqual({
      active: ['test']
    });

  });

  it('hidden section', () => {
    expect(sections({active: ['test']}, {
      type: SectionConstants.SECTION_HIDDEN,
      section: 'test'
    })).toEqual({
      active: []
    });

    expect(sections(undefined, {
      type: SectionConstants.SECTION_HIDDEN,
      section: 'test'
    })).toEqual({
      active: []
    });
  });

  it('default case', () => {
    expect(sections(undefined, {
      type: undefined,
      section: 'test'
    })).toEqual({
      active: []
    });
  });
});