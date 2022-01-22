import React from 'react';
import { Container } from 'react-bootstrap';
import TableComponent from '../components/Table';

export default function Home() {
  return (
    <Container className="my-5">
      <TableComponent />
    </Container>
  );
}
