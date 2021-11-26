import React, { useEffect, useState } from "react";
import './TicketDetail.scss';
import { getTicketDetail } from '../network/ticket-api';
import { Card } from './../components/Card/Card';

export const TicketDetail = ({ id }) => {
    const [detail, setDetail] = useState(null);
    const [isError, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true);
                const response = await getTicketDetail(id);
                setLoading(false);
                setDetail(response);
            } catch (err) {
                setError(err);
            }
        }
        fetchTickets();
    }, [])

    if(isError) {
        return (
            <div className="home-container">
                <p>Something went wrong! Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="home-container">
            <div className="head-container">
                <p className="count-heading">Detail</p>
            </div>

            {(isLoading && !detail) ? <p>Loading...</p> :
                detail !== null ? 
                <div className="detail-container">
                    <p><strong>Ticket Id:</strong> {detail.ticket.id}</p>
                    <p><strong>Subject:</strong> {detail.ticket.subject}</p>
                    <p><strong>Status:</strong> {detail.ticket.status}</p>
                    <p><strong>Priority:</strong> {detail.ticket.priority ? detail.ticket.priority : 'NA'}</p>
                    <p><strong>Tags:</strong> {detail.ticket.tags.join(', ')}</p>
                    <p><strong>Description:</strong> {detail.ticket.description}</p>
                    <p><strong>Created at:</strong> {new Date(detail.ticket.created_at).toDateString()}</p>
                    <p><strong>Updated at:</strong> {new Date(detail.ticket.updated_at).toDateString()}</p>
                    <p><strong>Requester Id:</strong> {detail.ticket.requester_id}</p>
                    <p><strong>Submitter Id:</strong> {detail.ticket.submitter_id}</p>
                </div> : null
            }
        </div>
    );
};