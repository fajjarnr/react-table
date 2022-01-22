import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Back() {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/">
          <Button variant="dark" size="sm" className="mx-2">
            <box-icon name="left-arrow-alt" color="white"></box-icon>
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
