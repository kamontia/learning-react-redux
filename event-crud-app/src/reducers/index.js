// 全てのReducerを統括するためのファイル
// Reducer: State と Action から新しい State を作成する
//

import { combineReducers } from "redux";
import count from "./count";

export default combineReducers({ count });
