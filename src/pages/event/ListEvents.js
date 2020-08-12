import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getListEvents } from 'store/modules/event/actions'
import { Table, Button } from 'react-bootstrap';
import { getEventsList } from 'store/modules/event/selector';

const ListEvents = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const events = useSelector(getEventsList)

  useEffect(() => {
    dispatch(getListEvents())
  }, []);

  console.log(events)
  return(
    <>
    <div className="row">
      <div className="col-md-12">
        <h1>Events</h1>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-md-12">
        <Button variant="success" onClick={() => router.push('/event/new')}>
          Create New Event
        </Button>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-md-12">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Rows</th>
              <th>Columns</th>
              <th>Free Seats</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event=> (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.rows}</td>
                <td>{event.columns}</td>
                <td></td>
              </tr>
            ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default ListEvents;
