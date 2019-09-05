import { FETCH_LOADING, FETCH_TEMPERATURE } from "../actions/temperatureAction";

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action){
  switch(action.type) {
    case FETCH_LOADING:
      return { ...state, loading: true };
    case FETCH_TEMPERATURE:
      return { ...state, loading: false, error: null, data: action.payload };
    default:
      return state;
  }
}
