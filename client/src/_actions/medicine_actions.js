import axios from "axios";
import { LOAD_MYLOG } from "./types";
// import { USER_SERVER } from '../components/Config.js';

export function loadMylog(dataToSubmit) {
  const request = axios
    .post(`/api/medicines/myLog`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOAD_MYLOG,
    payload: request,
  };
}
