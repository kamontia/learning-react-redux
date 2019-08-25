// 全てのReducerを統括するためのファイル
// Reducer: State と Action から新しい State を作成する
//

import { combineReducers } from "redux";
import events from "./events";
import { reducer as form } from "redux-form";

export default combineReducers({ events, form: form });
