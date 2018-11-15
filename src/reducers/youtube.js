import YoutubeConstants from '../constants/YoutubeConstants'

const youtube = (state = {}, action) => {
  if (action.type === YoutubeConstants.FETCH_PLAYLIST) {
    var data = action.data;
    return {...state, ...data}
  } else if (action.type === YoutubeConstants.SELECT_YOUTUBE_ITEM) {
    var selected = action.selected;
    return {...state, selected}
  }
  return state;
};

export default youtube;