import { MESSAGE_SHOW } from "./types";

export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg})
