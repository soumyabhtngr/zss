describe('ticket-handler', () => {
    const mockStub = {
        route: jest.fn(),
        post: jest.fn(),
        get: jest.fn(),
    };

    beforeAll(() => {
        jest.mock('express', () => {
            return {
                static: jest.fn(),
                Router: jest.fn().mockImplementation(() => mockStub),
            };
        });
    });

    it('should call route for get and post only', async () => {
        require('../ticketHandler');
        expect(mockStub.get).toBeCalledTimes(2);
    });
});