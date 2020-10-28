const SEARCHTEXT = "search/SEARCHTEXT";

export const searchText = (url, color) => ({
  type: SEARCHTEXT,
  payload: { url, color },
});

function search(state = {}, action) {
  switch (action.type) {
    case SEARCHTEXT:
      return { ...state, url: action.payload.url };
    default:
      return state;
  }
}

export default search;
