const tickeListController = require('../ticketList');
const request = require('request');

jest.mock('request');

describe('ticket-list', () => {

    it('should get the list of tickets', () => {
        // const req = { query: { page: 1, per_page: 25 } };
        // const res = { send: jest.fn() };
        // tickeListController(req, res)
        // const callbackFn = jest.fn().mockImplementation((err, response) => {
        //     return response
        // }) ;
        // request.mockImplementation(() => callbackFn)

        // expect(callbackFn).toBeCalled();
    });
});