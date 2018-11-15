import YoutubeConstants from '../constants/YoutubeConstants';

const { key, playlistId, playlistItemsUrl, playlistUrl } = YoutubeConstants;

const YoutubeAction = {
    fetchPlaylist() {
      const URL = `${playlistUrl}?part=snippet&id=${playlistId}&key=${key}`;
      const ITEMS_URL = `${playlistItemsUrl}?part=snippet&playlistId=${playlistId}&key=${key}`;
      return (dispatch) => Promise.all([fetch(URL), fetch(ITEMS_URL)]).then(([playlistRes, itemsRes]) => {
        Promise.all([playlistRes.json(), itemsRes.json()]).then(([playlistData, itemsData]) => {
          dispatch({
            type: YoutubeConstants.FETCH_PLAYLIST,
            data: {
              playlist: playlistData.items[0],
              items: itemsData.items,
              selected: itemsData.items[0]
            }
          })
        })
      })
    },

    /**
     * Select youtube item.
     * @param {Object} selected
     * @return {{type: string}} Action object.
     */
    selectYoutubeItem(selected) {
      return {
        type: YoutubeConstants.SELECT_YOUTUBE_ITEM,
        selected
      }
    }
}

export default YoutubeAction
