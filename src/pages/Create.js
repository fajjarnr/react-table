import React from 'react';
import { Container } from 'react-bootstrap';
import Back from '../components/Back';
import FormComponent from '../components/Form';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { createPost } from '../store/actions/posts';
import { useSelector } from 'react-redux';

export default function Create() {
  const dispatch = useDispatch();
  const { createPost: createPostData, errorCreate } = useSelector(
    (state) => state.posts
  );

  const submit = (e, data) => {
    e.preventDefault();
    dispatch(createPost(data));
  };

  if (createPostData || errorCreate) {
    if (errorCreate) {
      swal('Gagal!', `gagal membuat post`, 'error');
    } else {
      swal('Berhasil!', `berhasil buat post ${createPostData.id}`, 'success');
    }
  }

  return (
    <Container className="my-5">
      <Back />
      <h1>Create Post</h1>
      <FormComponent onSubmit={submit} />
    </Container>
  );
}
