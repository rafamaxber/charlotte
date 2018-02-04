import axios from 'axios';
import RestClient from '../services/RestClient';

const clientHttpInstance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4001',
});
const restClient = new RestClient({
  clientHttpInstance,
});

export const LIST_HOTELS = 'hotels/LIST_HOTELS';
export const LIST_HOTELS_REQUESTED = 'hotels/LIST_HOTELS_REQUESTED';
export const UPDATE_PRICE = 'hotels/UPDATE_PRICE';
export const UPDATE_RATE = 'hotels/UPDATE_RATE';
export const UPDATE_DATE = 'hotels/UPDATE_START_DATE';

const initialState = {
  minPrice: 100,
  maxPrice: 930,
  rate: 0,
  startDate: '',
  endDate: '',
  hotels: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_HOTELS:
      return {
        ...state,
        hotels: action.hotels,
      }

    case UPDATE_PRICE:
      return {
        ...state,
        minPrice: action.minPrice,
        maxPrice: action.maxPrice,
      }
    
    case UPDATE_RATE:
      return {
        ...state,
        rate: action.rate,
      }

    case UPDATE_DATE:
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate,
      }

      default:
        return state
    }
}

export const fetchHotels = () => {
  return (dispatch, getState) => {
    console.log('fetchHotels == ', getState().hotels)
    restClient.fetchHotels(getState().hotels)
      .then(hotels => {
        dispatch({
          type: LIST_HOTELS,
          hotels: hotels.data,
        });
      });
  }
}

export const updateRangeDate = (range) => {
  return dispatch => {
    dispatch({
      type: UPDATE_DATE,
      startDate: range.from,
      endDate: range.to,
    });
  }
}

export const updateFilterPrice = ({ minPrice, maxPrice }) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_PRICE,
      minPrice,
      maxPrice,
    });
  }
}

export const updateFilterRate = (rate) => {
  return dispatch => {
    dispatch({
      type: UPDATE_RATE,
      rate,
    });
  }
}

