import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getEventById, getBestSeat, postCreateReservation } from 'store/modules/event/actions'
import { getCurrentEvent, getBestSeats } from 'store/modules/event/selector';

import { Table, Button, Form, ButtonGroup } from 'react-bootstrap';

const NewReservation = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentEvent = useSelector(getCurrentEvent)
  const bestSeats = useSelector(getBestSeats)
  const eventId = router.query.event_id;

  const onChange = (e) => {
    const inputValue = e.target.value 

    if(inputValue != '' && inputValue != 0){
      dispatch(getBestSeat(eventId, inputValue))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const reservations = {
      reservations : bestSeats
    }

    dispatch(postCreateReservation(reservations, eventId))
    router.push('/event')
  }

  useEffect(() => {
    if(Object.keys(currentEvent).length === 0){
      if(eventId != null){
        dispatch(getEventById(eventId))    
      }
    }
  }, [currentEvent, router])

  return (
    <>
    <div className="row">
      <div className="col-md-12">
        <h1>New Reservation</h1>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <Form method="POST" onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="eventForm.EventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control name="event_name" value={currentEvent.name || ''} type="text" disabled={true} />
          </Form.Group>

          <Form.Group controlId="eventForm.QuantityOfSeats">
            <Form.Label>Quantity of Seats</Form.Label>
            <Form.Control name="quantity_of_seats" type="number" onChange={ (e) => onChange(e) } required={true} placeholder="How Many Seats Do You Want?" />
          </Form.Group>

          <div className="row">
            <div className="col-md-12">
              <h4>Your Reservations:</h4>
            </div>
            <div className="col-md-12">
              <ButtonGroup aria-label="Your Reservations">
                {bestSeats.map(seat=>( 
                  <Button key={seat.seat_code} variant="info">{seat.seat_code}</Button>
                ))}
              </ButtonGroup>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <Button variant="primary" type="submit">
                Submit
              </Button>

              <Button className="ml-3"onClick={() => router.push('/event')} variant="secondary">
                Back
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
    </>
  )
}

export default NewReservation;
