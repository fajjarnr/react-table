import React, { useEffect } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {
  Search,
} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, deletePostData, getPost } from '../store/actions/posts';
import swal from 'sweetalert';

const { SearchBar } = Search;

export default function TableComponent() {
  const dispatch = useDispatch();
  const { posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost());
    dispatch(deletePostData());
  }, [dispatch]);

  const handleClick = (id) => {
    console.log('id :>> ', id);
    swal({
      title: 'Apa Anda yakin?',
      text: 'setelah dihapus data tidak bisa dikembalikan',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletePost(id));
        swal(`Data ${id} berhasil dihapus`, {
          icon: 'success',
        });
      } else {
        swal('data batal dihapus');
      }
    });
  };

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true,
      headerStyle: () => {
        return { width: '5%' };
      },
    },
    {
      dataField: 'title',
      text: 'Title',
      sort: true,
    },

    {
      dataField: 'link',
      text: 'Action',
      headerStyle: () => {
        return { width: '25%' };
      },
      formatter: (rowContent, row) => {
        return (
          <div className="mx-auto">
            <Link to={`/detail/${row.id}`}>
              <Button variant="dark" size="sm" className="mx-2">
                <box-icon name="detail" color="white"></box-icon>
                Detail
              </Button>
            </Link>
            <Link to={`/edit/${row.id}`}>
              <Button variant="dark" size="sm" className="mx-auto">
                <box-icon name="edit-alt" color="white"></box-icon>
                Edit
              </Button>
            </Link>
            <Button
              variant="dark"
              size="sm"
              className="mx-2"
              onClick={() => handleClick(row.id)}
            >
              <box-icon name="trash" color="white"></box-icon> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: 'id',
      order: 'asc',
    },
  ];

  return (
    <Container>
      {posts.length > 0 ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={posts}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button variant="dark" size="sm" className="mx-2">
                      <box-icon name="plus-medical" color="white"></box-icon>
                      Create
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <SearchBar {...props.searchProps} placeholder="search..." />
                </Col>
              </Row>
              <hr />
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
                striped
                hover
                condensed
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {error ? (
            <h1>{error}</h1>
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </div>
      )}
    </Container>
  );
}
