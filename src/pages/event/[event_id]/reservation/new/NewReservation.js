import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getEventById, getBestSeat, postCreateReservation } from 'store/modules/event/actions'
import { getCurrentEvent, getBestSeats, getEventErrors, getReservations } from 'store/modules/event/selector';

import { Table, Button, Form, ButtonGroup, Alert, InputGroup } from 'react-bootstrap';

const NewReservation = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentEvent = useSelector(getCurrentEvent)
  const bestSeats = useSelector(getBestSeats)
  const eventErrors = useSelector(getEventErrors)
  const reservations = useSelector(getReservations)
  const eventId = router.query.event_id;
  const [seatQuantity, setSeatQuantity] = useState(0)

  const onClick = () => {
    if(seatQuantity != '' && seatQuantity != "0"){
      dispatch(getBestSeat(eventId, seatQuantity))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const reservations = {
      reservations : bestSeats
    }
    const quantity = e.target.quantity_of_seats.value

    if(quantity != "" && quantity != 0)
      dispatch(postCreateReservation(reservations, eventId))
  }

  useEffect(() => {
    if(Object.keys(currentEvent).length === 0){
      if(eventId != null){
        dispatch(getEventById(eventId))    
      }
    }
  }, [currentEvent, router])

  useEffect(() => {
    if(reservations)
      router.push('/event')
  })


  return (
    <>
    <div className="row">
      <div className="col-md-12">
        <h1>New Reservation</h1>
      </div>
    </div>

    { eventErrors && (
      <div className="row">
        <div className="col-md-12">
          <Alert variant="danger">
            { eventErrors }
          </Alert>
        </div>
      </div>
    )}

    <div className="row">
      <div className="col-md-12">
        <Form method="POST" onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="eventForm.EventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control name="event_name" value={currentEvent.name || ''} type="text" disabled={true} />
          </Form.Group>

          <Form.Group controlId="eventForm.QuantityOfSeats">
            <Form.Label>Quantity of Seats</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control name="quantity_of_seats" type="number" onChange={(e) => setSeatQuantity(e.target.value)} required={true} placeholder="How Many Seats Do You Want?" />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={() => onClick()}>
                  Search 
                </Button>
              </InputGroup.Append>
            </InputGroup>
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
