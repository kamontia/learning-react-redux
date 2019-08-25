// 全てのReducerを統括するためのファイル
// Reducer: State と Action から新しい State を作成する
//

import { combineReducers } from "redux";
import events from "./events";

export default combineReducers({ events });
