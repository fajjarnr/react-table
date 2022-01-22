import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Detail() {
  const { postDetail } = useSelector((state) => state.posts);

  return (
    <Table striped bordered hover className="my-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{postDetail.id}</td>
          <td>{postDetail.title}</td>
        </tr>
      </tbody>
    </Table>
  );
}
