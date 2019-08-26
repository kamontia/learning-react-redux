import {
  READ_EVENTS,
  READ_EVENT,
  DELETE_EVENTS,
  UPDATE_EVENT,
  CREATE_EVENTS
} from "../actions";
import _ from "lodash";

/*
  Reducerは 「State」と「Action」を組み合わせて新しい「State」作り出す。
  なので、引数がStateとAction。引数のStateの初期値を設定するのが定石らしい。
*/

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENTS:
    case READ_EVENTS:
    case UPDATE_EVENT:
      // 通常のレスポンスに対して、アクセスを容易にするために'logdash'でインデックスを付ける
      return _.mapKeys(action.response.data, "id");

    case READ_EVENT:
      // {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
      const data = action.response.data;
      return { ...events, [data.id]: data };

    case DELETE_EVENTS:
      delete events[action.id];
      return { ...events };

    default:
      return events;
  }
};
