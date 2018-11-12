import PortfolioConstants from '../constants/PortfolioConstants'

export default {
  fetchProjects() {
    return dispatch => {
      fetch('/data/projects.json').then(response => {
        response.json().then(projects => {
          dispatch({
            type: PortfolioConstants.FETCH_PROJECTS,
            projects
          })
        })
      })
    }
  }
}