import React, { useEffect, useState } from "react";
import './TicketList.scss';
import { getTicketList } from '../../network/ticket-api';
import { Card } from '../../components/Card/Card';
import ReactPaginate from 'react-paginate';
import { Link } from "@reach/router"

export const TicketList = () => {
    const ITEM_PER_PAGE = 25;
    const [list, setList] = useState(null);
    const [curPage, setCurPage] = useState(1);
    const [isError, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true);
                const response = await getTicketList(curPage, ITEM_PER_PAGE);
                setLoading(false);
                setList(response);
            } catch (err) {
                setError(err);
            }
        }

        fetchTickets();
    }, [curPage])

    const tickets = (list && list.tickets && list.tickets.length > 0) ? list.tickets : [];

    const handlePageClick = (event) => {
        if (list && list.count > ITEM_PER_PAGE) {
            const newOffset = (event.selected * ITEM_PER_PAGE) % list.count;

            setCurPage(event.selected + 1);
        }
    };

    const renderPagination = () => {
        return (tickets.length > 0 && list.count > ITEM_PER_PAGE) ? (
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={Math.ceil(list.count / ITEM_PER_PAGE)}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        ) : null;
    }

    if (isError) {
        return (
            <div className="home-container">
                <p>Something went wrong! Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="home-container">
            <div className="head-container">
                <p className="count-heading">Total number of tickets: {tickets.length > 0 ? list.count : 0}</p>
                {renderPagination()}
            </div>

            <div className="list">
                {isLoading ? <p>Loading...</p> : <ul>
                    {tickets.map((ticketItem, index) => {
                        return (
                            <li key={index}>
                                <Link to={`${ticketItem.id}`}>
                                    <Card>
                                        <p>Subject: {ticketItem.subject}</p>
                                        <p>Status: {ticketItem.status}</p>
                                        {ticketItem.priority && <p>Priority: {ticketItem.priority}</p>}
                                        <p>Tags: {ticketItem.tags.join(', ')}</p>
                                    </Card>
                                </Link>
                            </li>)
                    })}
                </ul>}
            </div>

        </div>
    );
};