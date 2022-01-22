import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validations from '../validations';

export default function FormComponent({ onSubmit, submitting }) {
  const { postDetail } = useSelector((state) => state.posts);

  const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          className="form-control"
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Field name="title" type="text" component={renderField} label="title" />
      </Form.Group>

      <Button variant="dark" type="submit" disabled={submitting}>
        Submit
      </Button>
    </Form>
  );
}

FormComponent = reduxForm({
  form: 'createPost',
  validate: validations,
  enableReinitialize: true,
})(FormComponent);
