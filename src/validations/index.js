const validations = (values) => {
  const errors = {};
  if (!values.title || values.title === '') {
    errors.title = 'Title tidak boleh kosong';
  }
};

export default validations;
