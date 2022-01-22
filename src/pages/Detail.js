import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Back from '../components/Back';
import DetailComponent from '../components/Detail';
import { getPostDetails } from '../store/actions/posts';

export default function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  return (
    <Container className="my-5">
      <Back />
      <h1>Post Detail {id}</h1>
      <DetailComponent />
    </Container>
  );
}
