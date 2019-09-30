import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import usersData from './UsersData';

const UserRow = (props) => {
  const { user: { id, name, registered, role, status } } = props;
  const userLink = `/users/${id}`;
  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  };

  return (
    <tr key={id.toString()}>
      <th scope="row"><Link to={userLink}>{id}</Link></th>
      <td><Link to={userLink}>{name}</Link></td>
      <td>{registered}</td>
      <td>{role}</td>
      <td><Link to={userLink}><Badge color={getBadge(status)}>{status}</Badge></Link></td>
    </tr>
  )
};

const Users = () => {
  const userList = usersData.filter(({id}) => id < 10);
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={6}>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
            </CardHeader>
            <CardBody>
              <Table responsive hover>
                <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">registered</th>
                  <th scope="col">role</th>
                  <th scope="col">status</th>
                </tr>
                </thead>
                <tbody>
                {userList.map((user, index) =>
                  <UserRow key={index} user={user}/>
                )}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
};

export default Users;
