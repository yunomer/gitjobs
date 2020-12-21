import React from 'react';
import {Pagination} from 'react-bootstrap';

export default function JobsPagination({page, setPage, hasNextPage}) {
    function adjustpage(amount) {
        setPage(prevPage => prevPage + amount);
    }

    return (
        <div>
            <Pagination>
                {page !== 1 && <Pagination.Prev onClick={() => adjustpage(-1)} />}
                {page !== 1 && <Pagination.Item onClick={() => setPage(1)} >1</Pagination.Item>}
                {page > 2 && <Pagination.Ellipsis />}
                {page > 2 && <Pagination.Item onClick={() => adjustpage(-1)} >{page - 1}</Pagination.Item>}
                <Pagination.Item active>{page}</Pagination.Item>
                {hasNextPage && <Pagination.Item onClick={() => adjustpage(1)} >{page + 1}</Pagination.Item>}
                {hasNextPage && <Pagination.Next onClick={() => adjustpage(1)} />}
            </Pagination>
        </div>
    )
}
