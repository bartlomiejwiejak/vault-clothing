import SHOP_DATA from '../../data/shop';

const INITIAL_STATE = {
  collections: SHOP_DATA
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;