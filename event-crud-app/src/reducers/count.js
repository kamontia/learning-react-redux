import { INCREMENT, DECREMENT } from "../actions";

const initialState = { value: 0 };

/*
  Reducerは 「State」と「Action」を組み合わせて新しい「State」作り出す。
  なので、引数がStateとAction。引数のStateの初期値を設定するのが定石らしい。
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };

    default:
      return state;
  }
};
