import React from 'react';
import { Form, Button } from 'react-bootstrap';

const NewEvent = () => {
  return(
    <>
    <div className="row">
      <div className="col-md-12">
        <h1>New Event</h1>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <Form>
          <Form.Group controlId="eventForm.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Movie Theater, Live Show" />
          </Form.Group>

          <Form.Group controlId="eventForm.Rows">
            <Form.Label>Rows</Form.Label>
            <Form.Control type="text" placeholder="1..26" />
          </Form.Group>

          <Form.Group controlId="eventForm.Columns">
            <Form.Label>Columns</Form.Label>
            <Form.Control type="text" placeholder="999" />
          </Form.Group>

          <div className="row">
            <div className="col-md-12">
              <Button variant="primary" type="submit">
                Submit
              </Button>

              <Button className="ml-3" variant="secondary" type="submit">
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

export default NewEvent;
