export const BASE = "http://localhost:3000";
export const TICKET_LIST = BASE + "/tickets";
export const TICKET_DETAIL = (id) => (BASE + "/tickets" + `/${id}`);