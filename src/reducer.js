

export const initialState = {
    basket: ['https://www.youtube.com/watch?v=36YnV9STBqc&ab_channel=TheGoodLifeRadioxSensualMusique'],
    
  };
  
  // Selector
  
  const reducer = (state, action) => {

    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket:action.item,
        };
       
      default:
        return state;
    }
  };
  
  export default reducer;