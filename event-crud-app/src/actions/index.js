import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";
// ActionCreator:Actionを返す関数

// redux-thunk で Actionではなく関数を返すことができるようになる(非同期処理を埋め込める)
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};
