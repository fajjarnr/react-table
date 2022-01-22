import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Back from '../components/Back';
import { editPost, getPostDetails } from '../store/actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FormComponent from '../components/Form';
import swal from 'sweetalert';

export default function Edit() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { postDetail, errorDetail } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  const submit = (e, data) => {
    e.preventDefault();
    dispatch(editPost(data, id));
  };

  if (postDetail || errorDetail) {
    if (errorDetail) {
      swal('Gagal!', `gagal mengupdate post`, 'error');
    } else {
      swal('Berhasil!', `berhasil update post ${postDetail.id}`, 'success');
    }
  }

  return (
    <Container className="my-5">
      <Back />
      <h1>Edit Post {id}</h1>
      <FormComponent onSubmit={submit} />
    </Container>
  );
}
