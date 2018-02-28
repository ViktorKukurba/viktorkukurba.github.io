import ExperienceConstants from '../constants/ExperienceConstants'

export default {
  fetchTechnologies() {
    return dispatch => {
      fetch('data/technologies.json').then(response => {
        if (response.ok) {
          return response.json().then(technologies => {
            return dispatch({
              type: ExperienceConstants.RETRIEVE_TECHNOLOGIES,
              technologies
            })
          })
        } else {
          throw Error(response.responseText)
        }
      }).catch(e => {
        console.log(e)
      })
    }
  }
}