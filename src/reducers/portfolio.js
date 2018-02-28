import PortfolioConstants from '../constants/PortfolioConstants'

const portfolio = (state = {}, action) => {
  if (action.type === PortfolioConstants.FETCH_PROJECTS) {
    var projects = action.projects
    return {...state, projects}
  }
  return state;
};

export default portfolio;