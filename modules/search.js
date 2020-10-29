const SEARCHTEXT = "search/SEARCHTEXT";
const SEARCHINPUT = "search/SEARCHINPUT";

export const searchText = (url) => ({
  type: SEARCHTEXT,
  payload: { url },
});

export const searchInput = (input) => ({
  type: SEARCHINPUT,
  payload: {
    select: input.select ? input.select : "naver",
    query: input.query,
  },
});

function search(state = {}, action) {
  switch (action.type) {
    case SEARCHTEXT:
      return { ...state, url: action.payload.url };
    case SEARCHINPUT:
      return {
        ...state,
        select: action.payload.select,
        query: action.payload.query,
      };
    default:
      return state;
  }
}

export default search;
