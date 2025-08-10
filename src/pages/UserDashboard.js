import React from 'react';
import { useCart } from '../context/CartContext';
import { Container, Table, Card } from 'react-bootstrap';

const UserDashboard = ({ user }) => {
  const { orderHistory } = useCart();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="mt-5 flex-grow-1">
        <h2>User Dashboard</h2>

        <Card className="mt-4">
          <Card.Body>
            <Card.Title>User Details</Card.Title>
            <Card.Text><strong>Name:</strong> {user.name}</Card.Text>
            <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
            <Card.Text><strong>Address:</strong> {user.address}</Card.Text>
          </Card.Body>
        </Card>

        <h4 className="mt-5">Order History</h4>
        {orderHistory.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Items</th>
                <th>Payment Mode</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {order.cart.map((item) => (
                      <div key={item.id}>
                        {item.name} x {item.quantity}
                      </div>
                    ))}
                  </td>
                  <td>{order.paymentMode}</td>
                  <td>{new Date(order.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <small>© 2025 Fab's Fashion Store. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default UserDashboard;