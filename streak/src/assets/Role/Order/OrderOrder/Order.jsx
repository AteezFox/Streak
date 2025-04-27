import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import styles from './order.module.css';

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processingOrderId, setProcessingOrderId] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      // Fix the API endpoint based on your backend structure
      const response = await axios.get('http://localhost:8080/streak/api/orders/available');
      setOrders(response.data || []);
    } catch (err) {
      console.error('Error fetching available orders:', err);
      setError('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const acceptOrder = async (orderId) => {
    try {
      setProcessingOrderId(orderId);

      // Send the state parameter that the backend expects
      await axios.patch(`http://localhost:8080/streak/api/orders/${orderId}`, {
        state: 'ACCEPTED'
      });

      // Refresh orders list
      fetchOrders();
    } catch (err) {
      console.error('Error accepting order:', err);
      setError('Failed to accept order');
    } finally {
      setProcessingOrderId(null);
    }
  };

  if (loading) {
    return <CircularProgress className={styles.loader} />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <>
      {orders.length === 0 ? (
        <Typography>Nincsenek elérhető rendelések.</Typography>
      ) : (
        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table aria-label="orders table">
            <TableHead>
              <TableRow>
                <TableCell>Rendelés ID</TableCell>
                <TableCell>Felhasználó</TableCell>
                <TableCell>Cím</TableCell>
                <TableCell>Összeg</TableCell>
                <TableCell>Dátum</TableCell>
                <TableCell>Állapot</TableCell>
                <TableCell>Művelet</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className={styles.orderRow}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.userName || 'N/A'}</TableCell>
                  <TableCell>{order.shippingAddress}</TableCell>
                  <TableCell>{order.totalPrice} HUF</TableCell>
                  <TableCell>
                    {order.orderDate ? new Date(order.orderDate).toLocaleDateString('hu-HU') : 'N/A'}
                  </TableCell>
                  <TableCell>{order.status || 'Új'}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => acceptOrder(order.id)}
                      className={styles.acceptButton}
                      disabled={processingOrderId === order.id}
                    >
                      {processingOrderId === order.id ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        'Elfogadás'
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}