export const initialState = {
  budgetFrequency: "",
  budgetBaseline: "",
  budgetAllocation: "",
  budgetBreakdown: []
};

const getEqualBreakDown = ( budgetBaseline, breakdown) => {
  return breakdown?.map(i => (
    {
      ...i,
      value: Number(Math.round(budgetBaseline/12))
  }))
}

const channelFormReducer = (state, action) =>  {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        budgetFrequency: action?.channel?.budgetFrequency,
        budgetBaseline: action?.channel?.baselineBudget,
        budgetAllocation: action?.channel?.budgetAllocation,
        budgetBreakdown: action?.channel?.budgetBreakdown
      };
    case 'update':
      return {
        ...state,
        [action.key]: action?.value,
      };
      case 'updateBreakDown':
        if(action.budgetAllocation === "Equal" || state.budgetAllocation === "Equal"){
          const breakdown = state.budgetBreakdown
          const newBreakDown = getEqualBreakDown(action.budgetBaseline, breakdown)
          return {
            ...state,
            budgetBreakdown: newBreakDown,
          };
        }
        return {
          ...state,
        };
    default:
      throw new Error();
  }
}

export default channelFormReducer