import SectionConstants from '../constants/SectionConstants'

const sections = (state = {active: []}, action) => {
  switch(action.type) {
    case SectionConstants.SECTION_VISIBLE:
      if (state.active.indexOf(action.section) === -1) {
        return Object.assign({}, state, {
          active: [...state.active, action.section]
        })
      }
      return state;
    case SectionConstants.SECTION_HIDDEN:
      let index = state.active.indexOf(action.section);
      if (index !== -1) {
        return Object.assign({}, state, {
          active: [...state.active.splice(0, index),
            ...state.active.splice(index+1)]
        })
      }
      return state;
    default: return state;
  }
};

export default sections;