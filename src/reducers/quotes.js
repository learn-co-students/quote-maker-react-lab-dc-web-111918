export default (state = [], action) => {
  let idx;
  let quote;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = {...state[idx]}
      quote.votes = state[idx].votes + 1
      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)]

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = {...state[idx]}
      if (quote.votes > 0) {
        quote.votes = state[idx].votes - 1
      }
      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)]

    default:
      return state;
  }
}
