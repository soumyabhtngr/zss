import { TICKET_LIST, TICKET_DETAIL } from './utils';

export const getTicketList = async (page, per_page) => {
    try {
        const response = await fetch(TICKET_LIST + '?' + new URLSearchParams({
            page,
            per_page,
        }));
        return response.json();
    } catch(err) {
        throw err;
    }
}

export const getTicketDetail = async (id) => {
    try {
        const response = await fetch(TICKET_DETAIL(id));
        return response.json();
    } catch(err) {
        throw err;
    }
}