import ExperienceConstants from '../constants/ExperienceConstants'

const experience = (state = {technologies: []}, action) => {
  switch(action.type) {
    case ExperienceConstants.TECH_VISIBLE:
      return Object.assign({}, state, {
      technologies: state.technologies.map(function(item) {
        if (item.name === action.name) {
          item.shown = true;
        }
        return item;
      })
    });
    default: return state;
  }
};

export default experience;