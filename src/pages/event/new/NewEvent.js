import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { postCreateEvent } from 'store/modules/event/actions'
import { Form, Button } from 'react-bootstrap';

const NewEvent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const normalizeParams = form => {
    return {
      "event": {
        "name": form.target.elements.name.value, 
        "rows": form.target.elements.rows.value,
        "columns": form.target.elements.columns.value 
      } 
    }
  }

  const onSubmit = form => {
    form.preventDefault();
    dispatch(postCreateEvent(normalizeParams(form)))
    router.push('/event')
  }

  return(
    <>
    <div className="row">
      <div className="col-md-12">
        <h1>New Event</h1>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <Form method="POST" onSubmit={onSubmit}>
          <Form.Group controlId="eventForm.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" required={true} placeholder="Movie Theater, Live Show" />
          </Form.Group>

          <Form.Group controlId="eventForm.Rows">
            <Form.Label>Rows</Form.Label>
            <Form.Control name="rows" type="number" required={true} placeholder="1..26" />
          </Form.Group>

          <Form.Group controlId="eventForm.Columns">
            <Form.Label>Columns</Form.Label>
            <Form.Control name="columns" type="number" required={true} placeholder="999" />
          </Form.Group>

          <div className="row">
            <div className="col-md-12">
              <Button variant="primary" type="submit">
                Submit
              </Button>

              <Button className="ml-3" variant="secondary">
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
