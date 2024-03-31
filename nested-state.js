const redux = require("redux");

const initialState = {
  name: "Leodan",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

const store = redux.createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("update state:", store.getState());
});
store.dispatch(updateStreet("456 Main St"));

unsubscribe();
