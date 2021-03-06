/**
 * The reducers are responsible to deal with all the requests such as changes that have to be done
 * in some component. The index here is responsible to gather all the reducers, such as alert.js and others
 */
import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import suprimentos from "./suprimentos";
import impressoras from "./impressoras";
import registrartroca from "./registrartroca";
import relatorio from "./relatorio";
import usuarios from "./usuarios";

export default combineReducers({
  auth,
  alert,
  suprimentos,
  impressoras,
  registrartroca,
  relatorio,
  usuarios,
});
