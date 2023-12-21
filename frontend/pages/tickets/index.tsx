import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Ticket from '../../components/ticket/ticket';
import { getTickets } from '../../services/services';
import { TicketType } from '../../constants/models';
import styles from './TicketsPage.module.css';

const TicketsPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await getTickets();
        console.log(response)
        setTickets(response);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className={styles.ticketsContainer}>
    {tickets.map((ticket) => (
      <div key={ticket.id} className={styles.ticketsRow}>
        <Grid item className={styles.ticketsGridItem}>
          <Ticket ticket={ticket} />
        </Grid>
      </div>
    ))}
  </div>
  );
};

export default TicketsPage;
