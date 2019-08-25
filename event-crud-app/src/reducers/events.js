import { READ_EVENTS } from "../actions";
import _ from "lodash";

/*
  Reducerは 「State」と「Action」を組み合わせて新しい「State」作り出す。
  なので、引数がStateとAction。引数のStateの初期値を設定するのが定石らしい。
*/

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // 通常のレスポンスに対して、アクセスを容易にするために'logdash'でインデックスを付ける
      return _.mapKeys(action.response.data, "id");

    default:
      return events;
  }
};
