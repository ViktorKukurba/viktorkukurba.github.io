import SectionConstants from '../constants/SectionConstants'

var SectionActions = {
  visibleSection(section) {
    return {
      type: SectionConstants.SECTION_VISIBLE,
      section
    }
  },

  hiddenSection(section) {
    return {
      type: SectionConstants.SECTION_HIDDEN,
      section
    }
  }
};

export default SectionActions