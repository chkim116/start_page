const SEARCHTEXT = "search/SEARCHTEXT";
const BOOKMARK = "search/BOOKMARK";

export const bookMark = (url) => ({
  type: BOOKMARK,
  payload: { url },
});

export const searchText = (url) => ({
  type: SEARCHTEXT,
  payload: { url },
});

function search(state = {}, action) {
  switch (action.type) {
    case SEARCHTEXT:
      return { ...state, url: action.payload.url };
    case BOOKMARK:
      return { ...state, url: action.payload.url };
    default:
      return state;
  }
}

export default search;
