import { screen, render } from '@testing-library/react';
import { TicketList } from '../TicketList';
import * as Api from '../../../network/ticket-api';

jest.mock('../../../network/ticket-api');

const mockGetTicketList = Api.getTicketDetail;

const ticketData = {
    count: 1,
    next_page: "https://zccsoumya.zendesk.com/api/v2/tickets.json?page=2&per_page=25",
    previous_page: null,
    tickets: [{
        "url": "https://zccsoumya.zendesk.com/api/v2/tickets/1.json",
        "id": 1,
        "external_id": null,
        "via": {
            "channel": "sample_ticket",
            "source": {
                "from": {},
                "to": {},
                "rel": null
            }
        },
        "created_at": "2021-11-19T19:55:27Z",
        "updated_at": "2021-11-19T19:55:27Z",
        "type": "incident",
        "subject": "Sample ticket: Meet the ticket",
        "raw_subject": "Sample ticket: Meet the ticket",
        "description": "Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
        "priority": "normal",
        "status": "open",
        "recipient": null,
        "requester_id": 1903485168287,
        "submitter_id": 421863991712,
        "assignee_id": 421863991712,
        "organization_id": null,
        "group_id": 1900001798707,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [
            "sample",
            "support",
            "zendesk"
        ],
        "custom_fields": [],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [],
        "followup_ids": [],
        "ticket_form_id": 1900000495627,
        "brand_id": 1900000303807,
        "allow_channelback": false,
        "allow_attachments": true
    }]
}

describe('<TicketList />', () => {
    it('should render tickets', () => {
        mockGetTicketList.mockReturnValue(ticketData);
        render(<TicketList />);

        expect(screen.getByText('Sample ticket\: Meet the ticket')).toBeInTheDocument();
    });
});