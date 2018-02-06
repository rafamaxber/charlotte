import axios from 'axios';
import RestClient from '../services/RestClient';

const clientHttpInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://charlotteapp-api.herokuapp.com',
});
const restClient = new RestClient({
  clientHttpInstance,
});

export const LIST_HOTELS = 'hotels/LIST_HOTELS';
export const LIST_HOTELS_REQUESTED = 'hotels/LIST_HOTELS_REQUESTED';
export const UPDATE_PRICE = 'hotels/UPDATE_PRICE';
export const UPDATE_RATE = 'hotels/UPDATE_RATE';
export const UPDATE_DATE = 'hotels/UPDATE_START_DATE';
export const LIST_HOTELS_ERROR = 'hotels/LIST_HOTELS_ERROR';

const initialState = {
  minPrice: 100,
  maxPrice: 930,
  rate: 0,
  startDate: '',
  endDate: '',
  hotels: undefined,
  errorMessage: '',
  hotelsLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_HOTELS:
      return {
        ...state,
        hotels: action.hotels,
        hotelsLoading: action.hotelsLoading,
      }
    case LIST_HOTELS_REQUESTED:
      return {
        ...state,
        hotelsLoading: action.hotelsLoading,
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
    
    case LIST_HOTELS_ERROR:
      return {
        ...state,
        errorMessage: action.message,
      }

      default:
        return state
    }
}

export const fetchHotels = () => {
  return (dispatch, getState) => {
    const params = {
      minPrice: getState().hotels.minPrice,
      maxPrice: getState().hotels.maxPrice,
      rate: getState().hotels.rate,
      startDate: new Date(getState().hotels.startDate).getTime() || '',
      endDate: new Date(getState().hotels.endDate).getTime() || '',
    }
    dispatch({
      type: LIST_HOTELS_REQUESTED,
      hotelsLoading: true,
    });
    return restClient.fetchHotels(params)
      .then(hotels => {
        dispatch({
          type: LIST_HOTELS,
          hotels: hotels.data,
          hotelsLoading: false,
        });
      })
      .catch(error => {
        return dispatch({
          type: LIST_HOTELS_ERROR,
          message: error.error.message,
          hotelsLoading: false,
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

